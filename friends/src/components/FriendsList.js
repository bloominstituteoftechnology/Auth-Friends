import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [friends]);

  return (
    <>
      {friends.map((friend) => {
        return (
          <div key={friend.id}>
            <h1>Name:{friend.name}</h1>
            <h2>Age:{friend.age}</h2>
            <h2>E:mail{friend.email}</h2>
          </div>
        );
      })}
    </>
  );
};

export default FriendsList;
