import React from "react";
import Friend from "./Friend";

const FriendsList = props => (
  <div>
    {props.friends.map((friend, i) => (
      <Friend
        friend={friend}
        key={i}
        deleteFriend={props.deleteFriend}
        toggleOnEditing={props.toggleOnEditing}
      />
    ))}
  </div>
);

export default FriendsList;
