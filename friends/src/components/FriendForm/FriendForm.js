import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import "./friend-form.styles.css";

export default function FriendForm() {
  const [newFriend, setNewFriend] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNewFriend({ ...newFriend, [name]: value });
  };

  const addNewFriend = (event) => {
    console.log("submitted");
    axiosWithAuth()
      .post("/friends", newFriend)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div class="registration-form">
      <form onSubmit={addNewFriend}>
        <div class="form-group">
          <input
            name="name"
            type="text"
            class="form-control item"
            id="username"
            placeholder="Name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <input
            name="email"
            type="email"
            class="form-control item"
            id="email"
            placeholder="Email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <input
            name="age"
            type="number"
            class="form-control item"
            id="age"
            placeholder="Age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <button class="btn btn-block create-account">Add Friend</button>
        </div>
      </form>
    </div>
  );
}
