import React from "react";

const FriendsList = props => {
  return props.friends.map(friend => {
    return (
      <div key={friend.name}>
        <div>
          <h3>{friend.name}</h3>
          <p>{friend.email}</p>
        </div>
      </div>
    );
  });
};

export default FriendsList;
