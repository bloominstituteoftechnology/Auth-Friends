import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import { fetchFriends } from './actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <Friends></Friends>
        <FriendForm></FriendForm>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friendsSaved: state.friendsReducer.friendsSaved,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    deletingFriend: state.friendsReducer.deletingFriend,
    friendDeleted: state.friendsReducer.friendDeleted,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
