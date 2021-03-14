import React, { useState, useEffect } from "react";
import axios from "axios";

import "./friendsList.style.css";

function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    axios
      .get("http://localhost:5000/api/friends", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setFriendsList(res.data);
        console.log(friendsList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      {friendsList.map((friend) => (
        <div className="friends">
          <h2 className="friend">{friend.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
