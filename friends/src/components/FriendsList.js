import React, { useEffect, useState } from "react";
import NewFriendForm from "./NewFriendForm";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friend from "./Friend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log("err axios getting friends: ", err);
      });
  }, []);

  return (
    <div className="friendslist-container">
      <h2>Your Friends List: </h2>
      <NewFriendForm />
      <div>Friends List! :)</div>
      <div className="friends-map-container">
        {friends.map((friend) => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendsList;
