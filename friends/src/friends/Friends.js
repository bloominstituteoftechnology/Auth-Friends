import React from 'react';

function Friends(props) {
  return (
    <ul>
      {props.friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  )
}

export default Friends;