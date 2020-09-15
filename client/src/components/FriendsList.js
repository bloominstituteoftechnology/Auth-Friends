import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setFriends(res.data);
      });
    console.log(friends);
  }, []);

  return (
    <div>
      <h2>Friends List</h2>

      {friends.map((friend) => {
        return (
          <p key={friend.id}>
            <span key={friend.id}></span>
            Name: {friend.name} <br />
            Age: {friend.age} <br />
            Email: {friend.email} <br />
            <br />
          </p>
        );
      })}
    </div>
  );
}

export default FriendsList;
