import React, { useState } from "react";
import axiosWithAuth from "../Axios/axiosWithAuth";

const AddFriends = () => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        console.log(e.target);
        setFriend({
          ...friend,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="friends name"
        value={friend.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="friends age"
        value={friend.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="friends email"
        value={friend.email}
        onChange={handleChange}
      />
      <button type="submit">Add new friend</button>
    </form>
  );
};

export default AddFriends;
