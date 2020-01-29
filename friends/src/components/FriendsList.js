import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap"

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("friends")
      .then(response => {
        console.log("friends get request", response);
        setFriends(response.data);
      })
      .catch(error => {
        console.log("error from server:", error);
      });
  }, []);

  return (
    <div>
      <h1>Your Friends</h1>
      <Link to="friends/add">
        <Button color="info">Add a new friend</Button>
      </Link>
      {friends.map(friend => {
        return (
          <div key={friend.id} className="friend">
            <p>
              Name: {friend.name}, Age: {friend.age}
            </p>
            <p>Email: {friend.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
