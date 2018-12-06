import React, { Component } from "react";
import "./Friend.css";

const Friend = props => {
  return (
    <div className="friend">
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <a href="mailto:props.friend.email">{props.friend.email}</a>
    </div>
  );
};

export default Friend;
