import React from "react";

const FriendCard = props => {
  return (
    <div className="card">
      <h4>{props.friend.name}</h4>
      <p>{props.friend.age} years old</p>
      <p>{props.friend.email}</p>
    </div>
  );
};

export default FriendCard;