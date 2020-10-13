import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValue = {
  name: "",
  age: "",
  email: "",
};

const AddFriend = ({ setFriends }) => {
  const [formValue, setFormValue] = useState(initialFormValue);

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", formValue)
      .then((res) => {
        console.log("hi", res.data);
        setFriends(res.data);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={formValue.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddFriend;
