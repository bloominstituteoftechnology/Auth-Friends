import React from "react";

import Friend from "./Friend";

const FriendList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendList;
