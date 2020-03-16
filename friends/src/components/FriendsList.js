import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      {friendsList.map(friend => (
        <p>{friend.name}</p>
      ))}
    </div>
  );
}

export default FriendsList;
