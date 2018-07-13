import React from "react";

const FriendsList = props => {
  return props.friends.map(friend => {
    return <div key={friend.name}>{friend.name}</div>;
  });
};

export default FriendsList;
