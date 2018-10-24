import React from "react";
import Friend from "./Friend";

const FriendsList = props => (
  <div>
    {props.friends.map((friend, i) => (
      <Friend friend={friend} key={i} />
    ))}
  </div>
);

export default FriendsList;
