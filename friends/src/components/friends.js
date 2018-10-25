import React from "react";

import Friend from "./Friend";

const Friends = props => {
  return (
    <div className="friends-list">
      {props.friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} delete={props.deleteFriend} />
        );
      })}
    </div>
  );
};

export default Friends;
