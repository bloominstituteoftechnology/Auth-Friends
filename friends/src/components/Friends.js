import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  console.log("Friends: ", friends);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    const token = localStorage.getItem("token");
    /* axiosWithAuth() */
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        console.log("success response: ", res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h3>This is a PROTECTED Friends component</h3>
      {/* <button onClick={getFriends}>get Friends</button> */}
      {friends.map((friend) => (
        <p>Friend name: {friend.name}</p>
      ))}
    </div>
  );
};

export default Friends;
