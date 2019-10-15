import React, { useEffect } from "react";
import withAuth from "../axios";
import FriendCard from "./FriendCard";

export default function ListFriends({ listFriends, setListFriends }) {
  useEffect(() => {
    withAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setListFriends(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);
  return (
    <div>
      {listFriends.map(friend => {
        return <FriendCard key={friend.id} friend={friend} />;
      })}
    </div>
  );
}
