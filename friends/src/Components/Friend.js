import React from "react";

const Friend = ({ friend }) => {
  return (
    <div>
      <h1>{friend.name}</h1>
      <h3>{friend.age} years old</h3>
      <h3>{friend.email}</h3>
    </div>
  );
};

export default Friend;
