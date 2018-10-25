import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends, handleUpdate, handleDelete }) => (
  <div className="friends-list">
    {friends.map(friend => (
      <Friend
        friend={friend}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    ))}
  </div>
);

export default FriendList;
