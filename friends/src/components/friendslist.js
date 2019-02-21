import React from "react";
import Friends from "./friends";

const FriendsList = props => {
  return (
    <ul>
      {props.friends.map(friends => {
        return <Friends key={friends.name} friends={friends} />;
      })}
    </ul>
  );
};

export default FriendsList;