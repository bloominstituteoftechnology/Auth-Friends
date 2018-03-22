import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFriends } from './actions';
import Friends from './components/friends';
import CreateFriendForm from './components/createfriendform';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchingFriends: state.fetchingFriends,
      friendsFetched: state.friendsFetched,
      friendsSaved: state.friendsSaved,
      savingFriends: state.savingFriends,
      updatingFriend: state.updatingFriend,
      friendUpdated: state.friendUpdated,
      deletingFriend: state.deletingFriend,
      friendDeleted: state.friendDeleted,
      friends: state.friends,
      error:  state.error,
  };
};

export default connect(mapStateToProps, {getFriends})(App);
