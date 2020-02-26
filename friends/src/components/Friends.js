import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendCard from "./FriendCard";

const Friends = props => {
  const { handleChanges, handleFriendSubmit, values } = useForm(submit);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    addFriend();
  }, [friendsList]);

  const addFriend = () => {
    axiosWithAuth()
      .get("./friends")
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => console.log(err));
  };

  function submit() {
    console.log("submitted successfully");
  }

  return (
    <>
      <div>
        <form onSubmit={handleFriendSubmit}>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={values.name}
            onChange={handleChanges}
          />
          <label>Age:</label>
          <input
            name="age"
            type="text"
            placeholder="Age"
            value={values.age}
            onChange={handleChanges}
          />
          <label>Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChanges}
          />
          <button>Add Friend</button>
        </form>
      </div>
      <div className="friends-list-container">
        {friendsList.map(friend => (
          <FriendCard friend={friend} key={friend.id} />
        ))}
      </div>
    </>
  );
};

export default Friends;