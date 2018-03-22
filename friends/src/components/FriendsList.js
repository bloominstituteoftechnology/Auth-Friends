import React from 'react';

function FriendsList(props) {
  return (
    <ul>
      {props.friends.map(friend => <li key={friend.id}>{friend.name}</li>)}
    </ul>
  );
}
