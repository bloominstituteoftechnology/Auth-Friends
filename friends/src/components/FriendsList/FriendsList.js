import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../../actions';
import UpdateFriend from '../UpdateFriend/UpdateFriend';
import './FriendsList.css';

class FriendsList extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <UpdateFriend />
        <ul>
          {this.props.friends.map(friend => {
            return <li key={friend.id}>
              <div>ID: {friend.id}</div>
              <div>Name: {friend.name}</div>
              <div>Age: {friend.age}</div>
              <div>Email: {friend.email}</div>
              <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    );
  };
};
FriendsList.defaultProps = {
  friends: [],
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error,
  }
}
export default connect(mapStateToProps, {getFriends, deleteFriend})(FriendsList);