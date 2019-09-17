import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";

const FriendForm = props => {
  const [friend, setFriend] = useState({ name: "", email: "", age: "" });

  const handleChange = event =>
    setFriend({ ...friend, [event.target.name]: event.target.value });

  const addFriend = (e) => {
      console.log('e', e)
      console.log(friend)
      e.preventDefault()
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        console.log("friend added", res);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h1>Friends Form</h1>

      <form onSubmit={addFriend}>
        <h2>Name: </h2>
        <input
          name="name"
          value={friend.name}
          onChange={handleChange}
          placeholder="name"
        />
        <h2>Email: </h2>
        <input
          name="email"
          value={friend.email}
          onChange={handleChange}
          placeholder="email"
        />
        <h2>Age: </h2>
        <input
          name="age"
          value={friend.age}
          onChange={handleChange}
          placeholder="age"
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
