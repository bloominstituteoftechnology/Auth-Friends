import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewForm = ({ setFriendsList }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: "",
    id: Date.now()
  });

  const handleChanges = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => setFriendsList(res.data));
    setNewFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <h2>New Friend Submission</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={newFriend.email}
          onChange={handleChanges}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewForm;