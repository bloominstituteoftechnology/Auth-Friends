import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};
export default FriendCard;
