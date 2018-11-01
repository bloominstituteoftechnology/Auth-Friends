import React from "react";
import Friend from "./Friend";

const FriendList = props => {
  return (
      <ul>
        {props.friends.map(friend => {
          return <Friend friend={friend} key={friend.name} id={friend.id}/>
        })}
      </ul>
  );
};

export default FriendList;