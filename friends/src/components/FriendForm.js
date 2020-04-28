import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosAuth';

function FriendForm({ setFriends }) {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post('/friends', friend).then(res => {
      setFriends(res.data);
      setFriend({
        name: "",
        age: "",
        email: ""
      });
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={friend.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="age"
        name="age"
        value={friend.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={friend.email}
        onChange={handleChange}
      />
      <button type='submit'>Add Friend</button>
    </form>
  );

}

export default FriendForm;
