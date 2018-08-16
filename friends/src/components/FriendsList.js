import React from "react";
import Friend from './Friend'

export default function FriendsList(props) {
  return (
    <div>
      {props.friends.map((note, index) => {
        <Friend key={index} friend={friend} />;
      })}
    </div>
  );
}
