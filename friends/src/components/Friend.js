import React from "react";

const Friend = props => {
  console.log("central perk:", props);
  return (
    <div className="friend-container">
      <h3>Name: {props.friend.name}</h3>
      <h3>Age: {props.friend.age}</h3>
      <h3>Email: {props.friend.email}</h3>
    </div>
  );
};

export default Friend;
