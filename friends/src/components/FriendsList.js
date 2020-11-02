import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
import FriendCard from "./FriendCard";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setFriends(res.data))
      // .catch((err) => console.log("Error is", err));
  }, []);

  return (
    <>
      {friends.map((friend) => (
        <FriendCard friends={friend} />
      ))}
    </>
  );
}