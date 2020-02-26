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
    console.log("deleting friend: ", friend);
    axiosWithAuth().delete(`friends/${friend.id}`);
    setChange(true);
  };

  // edit a friend
  const editFriend = friend => {
    axiosWithAuth().put(`friends/${friend.id}`, friend);
    setChange(true);
    console.log("editing friend: ", friend);
  };

  // on change for editing
  const handleChange = e => {
    setFriends([...friends, { [e.target.name]: e.target.value }]);
  };

  return (
    <div>
      <h1>Your Friends</h1>
      <Link to="friends/add">
        <Button color="success">Add a new friend</Button>
      </Link>
      <div className="friends-container">
        {friends.map(friend => {
          return (
            <div key={friend.id} className="friend">
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <label>Edit Name</label>
              <input name="name" onChange={handleChange} value={friend.name} />

              <label>Edit Age</label>
              <input name="age" onChange={handleChange} value={friend.age} />

              <label>Edit Email</label>
              <input
                name="email"
                onChange={handleChange}
                value={friend.email}
              />
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
    </div>
  );
};

export default FriendsList;
