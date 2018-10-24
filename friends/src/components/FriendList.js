import React from "react";
import Friend from "./Friend";

const FriendList = ( {friends} ) => (
  <div className="friends-list">
    {friends.map(friend => (
      <Friend friend={friend} />
    ))}
  </div>
);

export default FriendList;
