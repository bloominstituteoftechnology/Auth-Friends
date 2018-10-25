import React from "react";

import Friend from "./Friend";

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendsList;
