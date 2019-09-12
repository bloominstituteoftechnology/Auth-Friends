import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import Friend from "./Friend";

const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        localStorage.setItem("token", null);
        props.history.push("/login");
      });
  }, []);

  return (
    <div>
      {friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
