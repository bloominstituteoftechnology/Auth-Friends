import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map((friend, index) => {
        return (
        <li key={index}>
          {friend.name} <br />
          {friend.age} <br />
          {friend.email} <br />
          <button onClick={() => {props.deleteFriend(friend)}}>Delete</button>
        </li>
        )
      })}
    </ul>
  )
}

export default connect(null, { deleteFriend })(FriendsList)