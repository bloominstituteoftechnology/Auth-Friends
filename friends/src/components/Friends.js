import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  console.log("Friends: ", friends);

  const getFriends = () => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log("success response: ", res);
        setFriends(res.friends);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h3>This is a PROTECTED Friends component</h3>
      <button onClick={getFriends}>get Friends</button>
      {friends.map((friend) => (
        <p>Friend name: {friend.name}</p>
      ))}
    </div>
  );
};

export default Friends;
