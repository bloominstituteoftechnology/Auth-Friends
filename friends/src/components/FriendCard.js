import React from "react";

const FriendCard = ({ NewFriend }) => {
  return (
    <div>
      <h1>{NewFriend.name}</h1>
      <h2>{NewFriend.age}</h2>
      <h3>{NewFriend.email}</h3>
    </div>
  );
};

export default FriendCard;
