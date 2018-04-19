import React from "react";

const Friends = props => {
  // console.log("FRIEND PROPS", props);
  return (
    <div>
      {props.friendsList.map(friend => {
        return [
          <div key={friend.name}>{friend.name}</div>,
          <div key={friend.age}>{friend.age}</div>,
          <div key={friend.email}>{friend.email}</div>
        ];
      })}
    </div>
  );
};

export default Friends;
