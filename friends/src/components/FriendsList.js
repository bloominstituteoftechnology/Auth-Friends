import React from 'react';
import { connect } from 'react-redux';
// import { getFriends, addFriends } from '../actions';

const FriendsList = state => {
  console.log(state)
  return state.friends.map((friend) => {
    return (
    <div>
      <h1 className="list-title">Friends</h1>
      <ul className="friend-list">
            <li key={friend.id}>
              <div className="friend-name">{friend.name}</div>
              <div className="friend-age">{`Age: ${friend.age}`}</div>
              <div className="friend-email">{`Email: ${friend.email}`}</div>
            </li>
      </ul>
    </div>
    )
  })
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    error: state.errorMessage
  }
}

export default connect(mapStateToProps, {})(FriendsList);