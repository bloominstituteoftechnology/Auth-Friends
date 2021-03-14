import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import { Friend } from "./Friend";
import Logout from "../Logout";
import FriendForm from "../FriendForm/FriendForm";
import "./friendsList.style.css";

function FriendsList() {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriendsList(res.data);
      })
      .catch((err) => console.log(err));
  }, [friendsList]);

  return (
    <div>
      <p className="log-out">
        <Logout />
      </p>
      <h1 className="title">Friends</h1>
      <FriendForm />
      <div className="container">
        {friendsList.map((friend, index) => (
          <Friend key={index} friend={friend} />
        ))}
      </div>
    </div>
  );
}

export default FriendsList;
