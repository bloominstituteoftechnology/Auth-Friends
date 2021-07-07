import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/AxiosWithAuth";
// Compontents
import Friend from "./Friend";
import FriendForm from "./FriendForm";

function FriendPage() {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log(res)
        console.log(res.data)
        setFriends(res.data);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  }, []);

  const [friends, setFriends] = useState([
    {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  ]);

  console.log(friends);

  const addNewFriend = (friend) => {
    const newFriend = {
      id: Date.now(),
      name: friend.name,
      age: friend.age,
      email: friend.email
    };
    setFriends([...friends, newFriend]);
  };

  return (
    <div className="App">
      <h1>My Friends</h1>

      <FriendForm addNewFriend={addNewFriend} />
      <Friend friends={friends} />
    </div>
  );
}

export default FriendPage;
