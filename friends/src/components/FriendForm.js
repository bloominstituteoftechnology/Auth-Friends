import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import cuid from "cuid";

const FriendForm = () => {
  const [newFriend, setNewFriend] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends", friends)
      .then(response => {
        console.log("Friends list", response);
        setFriends(response.data);
      })
      .catch(error => console.log("This is an error", error));
  }, []);
  const handleChange = event => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();

    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(response => {
        console.log(response.data);
        setFriends(response.data);
      })
      .catch(error => console.log("This is an error", error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="age"
          value={newFriend.age}
          onChange={handleChange}
          placeholder="Age"
        />
        <input
          type="email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
      <div>
        <div key={cuid()}>
          {friends.map(friend => {
            return (
              <div>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FriendForm;
