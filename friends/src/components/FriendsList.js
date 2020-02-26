import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(false);
    axiosWithAuth()
      .get("friends")
      .then(response => {
        console.log("friends get request", response);
        setFriends(response.data);
      })
      .catch(error => {
        console.log("error from server:", error);
      });
  }, [change]);

  // delete friend
  const deleteFriend = friend => {
    console.log(friend);
    axiosWithAuth().delete(`friends/${friend.id}`);
    setChange(true);
  };

  // edit a friend
  const editFriend = friend => {
    axiosWithAuth().put(`friends/${friend.id}`, friend.id);
    setChange(true);
    console.log(friend);
  };

  return (
    <div>
      <h1>Your Friends</h1>
      <Link to="friends/add">
        <Button color="success">Add a new friend</Button>
      </Link>
      {friends.map(friend => {
        return (
          <div key={friend.id} className="friend">
            <p>Name: {friend.name}</p>
            <input defaultValue={friend.name} />
            <p>Age: {friend.age}</p>
            <input defaultValue={friend.age} />
            <p>Email: {friend.email}</p>
            <input defaultValue={friend.email} />
            <br />
            <Button
              color="danger"
              onClick={() => {
                deleteFriend(friend);
              }}
            >
              Delete
            </Button>
            <Button
              color="info"
              onClick={() => {
                editFriend(friend);
              }}
            >
              Edit
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
