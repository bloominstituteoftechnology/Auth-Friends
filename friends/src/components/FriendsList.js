import React from "react";
import Friend from "./Friend";

const FriendsList = props => (
  <div>
    {props.friends.map((friend, index) => (
      <Friend key={index} friend={friend} />
    ))}
  </div>
);

export default FriendsList;
