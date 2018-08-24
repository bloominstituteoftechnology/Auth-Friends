import React, { Component } from 'react';
import Friends from './friends';
import FriendForm from './CreateFriendForm'
import { getFriends } from '../actions/index';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
      <FriendForm />
      <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {friendsReducer} = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  }
}

export default connect(mapStateToProps, {getFriends})(App);
