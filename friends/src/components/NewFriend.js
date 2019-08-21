import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = props => {
  console.log("newfriend:", props);
  const [name, setName] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", name)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setName(res.data);
      })
      .catch(err => console.error(err.response));
  };

  return (
    <div classname="new-friend">
      <form onSubmit={addFriend}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="name"
          value={name.name}
        />
        <input
          onChange={handleChange}
          type="text"
          name="age"
          placeholder="age"
          value={name.age}
        />

        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="email"
          value={name.email}
        />
        <button onClick={addFriend}>Submit</button>
      </form>
    </div>
  );
};

export default NewFriend;
