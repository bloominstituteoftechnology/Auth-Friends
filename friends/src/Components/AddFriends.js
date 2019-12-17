import React, { useState } from "react";
import axiosWithAuth from "../Axios/axiosWithAuth";

const AddFriends = () => {
  const [friends, setFriends] = useState({ name: "", age: "", email: "" });

  const handleChange = event => {
    setFriends({
      ...friends,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friends)
      .then(res => {
        console.log(res.event.target);
        setFriends({
          ...friends,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="friends name"
        value={friends.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="friends age"
        value={friends.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="friends email"
        value={friends.email}
        onChange={handleChange}
      />
      <button type="submit">Add new friend</button>
    </form>
  );
};

export default AddFriends;
