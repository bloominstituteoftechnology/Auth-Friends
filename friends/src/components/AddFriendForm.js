import React, { useState } from 'react';
import Menu from './Menu';
import { axiosWithAuth } from '../utilities/axiosAuth';

const AddFriendForm = props => {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(res => {
        props.history.push('./friends');
      })
      .catch(err => console.log(err.response));
  };

  return (
    <>
      <Menu {...props} />
      <form onSubmit={() => handleSubmit()}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="Name"
          onChange={handleChange}
          value={newFriend.name}
          placeholder="name..."
        />
        <label htmlFor="Age">Age</label>
        <input
          type="number"
          name="Age"
          onChange={handleChange}
          value={newFriend.age}
          placeholder="age..."
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="Email"
          onChange={handleChange}
          value={newFriend.email}
          placeholder="email..."
        />
        <button type="submit">Add Friend</button>
      </form>
    </>
  );
};

export default AddFriendForm;
