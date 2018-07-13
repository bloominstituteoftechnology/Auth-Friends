import React from "react";

const friendsList = props => {
  props.friends.map(friend => {
    return <div key={friend.name}>{friend.name}</div>;
  });
};

export default FriendsList;
