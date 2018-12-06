import React from 'react';
import { connect } from 'react-redux';

import {
  fetchFriends,
  fetchFriend,
  addFriend,
  updateFriend,
  deleteFriend
} from './actions';

import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() { 
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendList
          friends={this.props.friends}
          fetchFriend={this.props.fetchFriend}
          deleteFriend={this.props.deleteFriend}
          isFetchingFriends={this.props.fetchingFriends}
        />
        <FriendDetail
          friend={this.props.friend}
          isFetchingFriend={this.props.fetchingFriend}
        />
      </div>
    )}
}

export default connect(
  state => state.friendsReducer
  ,
  {
    fetchFriends,
    fetchFriend,
    updateFriend,
    addFriend,
    deleteFriend
  }
)(App);