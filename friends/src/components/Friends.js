import React, { useState, useEffect } from "react";
// import AddFriends from "./AddFriends";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
  const [info, setInfo] = useState({ name: "", age: "", email: "" });
  const [friends, setFriends] = useState([]);

  const handleChange = e => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/friends", info)
      .then(res => {
        setInfo({
          ...info,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log("submit error", err.response));
  };

  useEffect(() => {
    axiosWithAuth()
      .get("api/friends")
      .then(res => {
        console.log('the response', res);
        setFriends(res.data)
        })
      .catch(err => console.log("Axios call for friends list error", err));
  },[]);

  return (
    <div className="friends">
      <h1>Friends</h1>
      {friends.map(friend => (
        <div key={friend.id} friend={friend}></div>     
      ))}
        <form className='friend-form' data-testid='friend-form' onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={info.name}
          placeholder="Add friend's name..."
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={info.age}
          placeholder="Add friend's age"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={info.email}
          placeholder="Add friend's email..."
          onChange={handleChange}
        />
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  );
};

export default Friends;
