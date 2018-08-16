import React from "react";
import FriendCard from "./FriendCard";

export default function FriendList(props) {
  return (
    <ul>
    {props.friends.map(friend => {
        return(
        <li key={friend.id}>
        <FriendCard friend={friend} />
        <button onClick={() => props.delete(friend.id)}>Delete Friend</button>
        </li>);
    })}
    </ul>
  );
}
