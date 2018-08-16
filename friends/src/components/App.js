import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, saveFriend, updateFriend,
  deleteFriend, fetchFriend, editFriend, stopEditingFriend, removeFriend } from '../actions';
import './App.css';
import FriendForm from './FriendForm';
import FriendList from './FriendList';
import FriendDisplay from './FriendDisplay';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }

  getFriend = id => {
    this.props.fetchFriend(id);
  }

  editFriend = () => {
    this.props.editFriend();
  }

  removeFriend = () => {
    this.props.removeFriend();
  }

  deleteFriend = id => {
    this.props.deleteFriend(id);
  }

  render() {
    return (
      <div className="App">
        <FriendForm save={this.props.saveFriend} />
        <FriendList />
        {this.props.showingFriend ? <FriendDisplay {...this.props.friend} edit={this.editFriend} del={this.deleteFriend} done={this.removeFriend} /> : null}
        {this.props.isEditing ? <FriendForm {...this.props.friend} editing="true" save={this.props.updateFriend} /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetchingFriends,
    showingFriend: state.friendReducer.hasLoadedFriend,
    friend: state.friendReducer.friend,
    isEditing: state.friendReducer.isEditing,
  }
}

export default connect(mapStateToProps,
  { fetchFriends, saveFriend, updateFriend, deleteFriend, fetchFriend, editFriend, stopEditingFriend, removeFriend })(App);
