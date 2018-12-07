import React from 'react';
import { connect } from 'react-redux';

import './styles/App.css';
import {
  fetchFriends,
  fetchFriend,
  addFriend,
  updateFriend,
  deleteFriend
} from './store/actions';

import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';
import AddFriendForm from './components/AddFriendForm';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() { 
    return (
      <div className="App">
        <h1>Friends List</h1>
        <div className="friends">
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
        <AddFriendForm
          addFriend={this.props.addFriend}
          isAddingFriend={this.props.addingFriend}
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