import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialNewFriend = {
  id: 0,
  name: "",
  age: undefined,
  email: "",
};

const NewFriend = function (props) {
  const [newFriend, setNewFriend] = useState(initialNewFriend);

  const { setFriends } = props

  const newFriendWithId = function (currentNewFriend) {
    return {
      ...currentNewFriend,
      id: Date.now(),
    };
  };

  const createNewFriend = function (e) {
    e.preventDefault();

    const friendToPost = newFriendWithId(newFriend);

    axiosWithAuth()
      .post("/friends", friendToPost)
      .then((res) => {
        // console.log(res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={createNewFriend}>
      <span>Name: </span>
      <input
        type="text"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
      />
      <br />
      <span>Age: </span>
      <input
        type="text"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
      />
      <br />
      <span>Email: </span>
      <input
        type="text"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default NewFriend;
