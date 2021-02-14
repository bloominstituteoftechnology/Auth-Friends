import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = () => {
  const [friend, setFriend] = useState({
    name: "",
    age: 24,
    email: "",
  });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="John Appleseed"
          name="name"
          id="name"
          value={friend.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input name="age" id="age" value={friend.age} onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input
          placeholder="email@inbox.com"
          name="email"
          id="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
    </>
  );
};

export default NewFriend;
