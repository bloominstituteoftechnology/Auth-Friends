import React from "react";

import Friend from "./friend";

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendsList;
