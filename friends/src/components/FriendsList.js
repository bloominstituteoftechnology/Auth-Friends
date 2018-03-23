import React, { Component } from 'react';
import { connect } from 'react-redux';
import getFriendsAction from '../actions/getFriendsAction';
import addFriendAction from '../actions/addFriendAction';
import AddFriend from './AddFriend';
// import getFriendsReducer from '../reducers/getFriendsReducer';
// import addFriendReducer from '../reducers/addFriendReducer';

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriendsAction();
  }

  render() {
    return (
      <div>
        <AddFriend />
        <ul>
          {this.props.friends.map((friend, index) => {
            return (
              <li key={friend.id}>
                <div className="friendName">Name: {friend.name}</div>
                <div className="friendAge">Age: {friend.age}</div>
                <div className="friendEmail">Email: {friend.email}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    fetched: store.fetched,
    friends: store.friendsReducer.friends,
    error: store.errorMessage
  };
};

const actions = {
  getFriendsAction,
  addFriendAction
};

export default connect(mapStateToProps, actions)(FriendsList);
