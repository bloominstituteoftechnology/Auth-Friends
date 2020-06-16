import React, { useState, useEffect } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";
import Nav from "./nav";
import Friend from "./friend";
import AddFriend from "./addFriend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getfriends = () => {
    // console.log('Hi from getfriends', localStorage)
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        // console.log('Here Is The Friends List:', res)
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getfriends();
  }, [friends]);

  return (
    <div>
      <p></p>
      <Nav />
      <AddFriend />
      <Friend friends={friends} />
    </div>
  );
};

export default FriendsList;
