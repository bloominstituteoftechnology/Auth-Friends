import React, { useState } from "react";
import axiosWithAuth from "../utils/AxiosWithAuth.js";

const AddFriend = () => {
  const [friendData, setFriendData] = useState({name:"", age:"", email:""})

  const handleChange = e => {
    setFriendData(
      {
        ...friendData,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post("/friends", friendData)
      .then(res => { 
        console.log(e.target)
        setFriendData(
          {
            ...friendData,
            name: "",
            age: "",
            email:""
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={friendData.name}
        placeholder="Friend's Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={friendData.age}
        placeholder="Friend's Age"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={friendData.email}
        placeholder="Friend's email"
        onChange={handleChange}
      />
      <button type="submit">Add Friend!</button>
    </form>
  );
};

export default AddFriend;