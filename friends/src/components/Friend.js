import React from "react";
import "../App.css";

const Friend = ({ friend }) => {
  return (
    <div className="friend-container">
      <h4>{friend.name}</h4>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  );
};
export default Friend;
