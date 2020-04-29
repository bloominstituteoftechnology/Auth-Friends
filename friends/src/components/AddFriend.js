import React, { useState } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFriend = {
  id: "",
  name: "",
  age: "",
  email: ""
};

const AddFriend = props => {
  const [newFriend, setNewFriend] = useState(initialFriend);

  const changeHandler = e => {
    console.log(e.target.value)
    setNewFriend({...newFriend, [e.target.name]: e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
        // props.updateItems(res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='name'
        onChange={changeHandler}
        placeholder='Name'
        value={newFriend.name}
      />

      <input 
        type='number'
        name='age'
        onChange={changeHandler}
        placeholder='Age'
        value={newFriend.age}
      />

      <input 
        type='email'
        name='email'
        onChange={changeHandler}
        placeholder='Email@email.com'
        value={newFriend.email}
      />

      <button>Add Friend</button>
    </form>
  )
}

export default AddFriend;