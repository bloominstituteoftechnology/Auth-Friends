import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsList';
import { getFriends } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FriendsList/>
        <FriendsForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
