import React from "react";
import Friend from "./Friend";
const FriendList = props => {
  return (
    <div className="friend-list">
      {props.friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} delete={props.deleteFriend} />
        );
      })}
    </div>
  );
};
export default FriendList;
