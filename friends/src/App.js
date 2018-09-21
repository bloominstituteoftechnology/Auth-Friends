import React, { Component } from 'react';
import {connect} from 'react-redux';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import {getFriends} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    console.log(props);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        {this.props.error ? <h1>Error Getting Friends</h1> : null}
        <Friends friends = {this.props.friends} />
        <FriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {friends} = state;
  return {
    friends: friends.friends,
    error: friends.error,
    gettingFriends: friends.gettingFriends
  }
}

export default connect(mapStateToProps, {getFriends})(App);