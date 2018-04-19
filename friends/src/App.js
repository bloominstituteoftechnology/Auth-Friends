import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/friendsActions.js';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        Time to build  friends app
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  };
}

export default connect(mapStateToProps, {fetchFriends})(App);
