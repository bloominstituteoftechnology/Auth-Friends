import React from "react";
import './Friend.css';

const Friend = props => {
  return (
    <div className="Friend-container">
      <h3>{props.friend.name}</h3>
      <h5>Age: {props.friend.age}</h5>
      <h5>Email: {props.friend.email}</h5>
    </div>
  );
};

export default Friend;