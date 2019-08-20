import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import NewFriend from "./NewFriend";

const FriendList = props => {
  console.log("friendlist props:", props);
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/data")
      .then(res => {
        setFriend(res.data);
      })
      .catch(err => console.error("error here:", err));
  };
  return (
    <div className="friend-list">
      <h1>list</h1>
      <NewFriend />

      {friend.map(friend => (
        <Friend key={friend.name} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
