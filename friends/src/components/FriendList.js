import React from "react";
import Friend from "./Friend";

const FriendList = ( {friends, handleUpdate} ) => (
  <div className="friends-list">
    {friends.map(friend => (
      <Friend friend={friend}  handleUpdate={handleUpdate}/>
    ))}
  </div>
);

export default FriendList;
