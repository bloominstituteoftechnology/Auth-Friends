import React from "react";

const Friend = props => (
  <div>
    <h2>Name: {props.friend.name}</h2>
    <p>Age: {props.friend.age}</p>
    <p>Email: {props.friend.email}</p>
  </div>
);

export default Friend;
