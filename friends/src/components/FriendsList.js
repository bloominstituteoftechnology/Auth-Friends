import React from "react";

const FriendsList = props => {
  return props.friends.map(friend => {
    return (
      <div key={friend.name}>
        <h3>{friend.name}</h3>
      </div>
    );
  });
};

export default FriendsList;
