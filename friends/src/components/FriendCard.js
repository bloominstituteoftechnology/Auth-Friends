import React from 'react';

const FriendCard = props => {
  return (
    <div className="friendCard">
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
      <button
        onClick={e => props.deleteFriend(e, props.friend.id)}
        className="deleteButton">
        Delete
      </button>
    </div>
  );
};

export default FriendCard;
