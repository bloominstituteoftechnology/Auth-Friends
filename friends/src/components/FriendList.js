import React, { useState, useEffect } from 'react';
import "../App.css";

import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./Friend";

let initialFriends = [
  {
    id: 1,
    name: 'Loading...',
    age: 0,
    email: 'Loading...'
  },

];



const FriendList = () => {
  const [friends, setFriends] = useState(initialFriends);

  const getData = () => {
    const token = localStorage.getItem("authToken");
    axiosWithAuth().get("/friends")
      .then(res => {
          setFriends( res.data)
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="friendList-container">
      {friends.map((friend) => {
        return <FriendCard friend={friend} />
      })}
    </div>
  )
};

export default FriendList;