import React from "react";
import UpdateFriendForm from "./UpdateFriendForm";

const Friends = props => {
  return (
    <div>
      {props.friendsList.map(friend => {
        return [
          <div key={friend.name}>{friend.name}</div>,
          <div key={friend.age}>{friend.age}</div>,
          <div key={friend.email}>{friend.email}</div>,
          <UpdateFriendForm friend={friend.id} />
        ];
      })}
    </div>
  );
};

export default Friends;
