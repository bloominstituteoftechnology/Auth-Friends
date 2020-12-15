import React, { useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";

const Friends = (props) => {
  const [infos, setInfos] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
  });

  const addFriends = (e) => {
    e.preventDefault();
    console.log(addFriends);
    axiosWithAuth()
      .post("/api/friends", infos)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/login");
        // window.location.href = "/login";
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>This is the Friend component! Add friends here!</h1>
      <form onSubmit={addFriends}>
        <input
          type="number"
          name="id"
          placeholder="employee badge"
          value={infos.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={infos.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          value={infos.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={infos.email}
          onChange={handleChange}
        />
        <button onClick={addFriends} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Friends;
