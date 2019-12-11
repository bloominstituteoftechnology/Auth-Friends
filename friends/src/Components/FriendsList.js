import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth";
import Friends from "./Friends";
import FriendForm from "./FriendsForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("res.data", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log("err", err));
  }, []);

  return (
    <div>
      <h1>Add A New Friend</h1>
      <FriendForm />
      <h2>You have {friends.length} friends</h2>
      <div className="FriendsList">
        {friends.map(friend => (
          <Friends key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;