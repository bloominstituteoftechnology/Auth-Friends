import React from 'react';
import '../App.css';

const FriendsList = props => {
  return (
    <div className="friend-list">
      {props.friends.map(friend => {
        return <div className="friend-card">{friend.name}</div>;
      })}
    </div>
  )
}

export default FriendsList;
