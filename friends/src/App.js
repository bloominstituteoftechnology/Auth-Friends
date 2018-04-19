import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './Actions/Index.js';
import Friends from './Components/Friends';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <Friends />
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

export default connect(mapStateToProps, {fetchFriends})(App);
