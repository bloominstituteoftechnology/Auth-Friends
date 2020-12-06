import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const AddFriendForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
    id: "",
    age: "",
    id: Date.now(),
  });
  console.log("newFriend", newFriend);

  const [newGang, setNewGang] = useState([]);

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const postFriend = (friend) => {
    axiosWithAuth()
      .post("api/friends", friend)
      .then((res) => console.log("successful res: ", res))
      .catch((err) => console.log(err.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFriend(newFriend);
    setNewFriend({
      name: "",
      age: "",
      email: "",
      id: "",
    });
  };

  return (
    <div>
      <h2>Add a New Friend</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Friend's name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Friend's email"
          value={newFriend.email}
          onChange={handleChange}
        />

        <input
          name="age"
          placeholder="Friend's age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <button>ADD FRIEND</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
