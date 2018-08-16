import React from 'react';

const FriendCard = props => {
  return (
    <div className="friend-card">
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </div>
  );
};

export default FriendCard;