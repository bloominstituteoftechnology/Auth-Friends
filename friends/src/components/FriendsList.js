import React from 'react';

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map((friend, index) => {
        return (
        <li key={index}>
          {friend.name} <br />
          {friend.age} <br />
          {friend.email} <br />
        </li>
        )
      })}
    </ul>
  )
}

export default FriendsList;
