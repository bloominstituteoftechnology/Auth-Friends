import React from "react";
import FriendCard from "./FriendCard";
import EditForm from "./EditForm";
 export default function FriendList(props) {
  return (
    <ul>
    {props.friends.map(friend => {
        return(
        <li key={friend.id}>
        <FriendCard friend={friend} />
        <EditForm friend={friend} />
        <button onClick={() => props.delete(friend.id)}>Bye!</button>
        </li>);
    })}
    </ul>
  );
}