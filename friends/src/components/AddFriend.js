import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const AddFriend = () => {
    const [friend, setFriend] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChanges = e => {
        setFriends({
            ...friend,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", friend)
            .catch(err => console.log(err));
        setFriend({ name: '', age: '', email: ''});
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="name"
          name="name"
          value={friend.name}
          onChange={handleChanges}
        />
        <input
          id="age"
          type="text"
          placeholder="age"
          name="age"
          value={friend.age}
          onChange={handleChanges}
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          name="email"
          value={friend.email}
          onChange={handleChanges}
        />
        <input type="submit" value="Add Friend" />
      </form>
    );
}

export default AddFriend;