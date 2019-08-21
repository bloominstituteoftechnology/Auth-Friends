import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const NewFriend = props => {
  console.log("newfriend:", props);
  const [name, setName] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addFriend(name);
  };

  return (
    <div className="new-friend">
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewFriend;
