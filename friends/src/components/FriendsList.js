import React from 'react';
import '../App.css';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return <div>{friend.name}</div>;
      })}
    </div>
  )
}

export default FriendsList;
