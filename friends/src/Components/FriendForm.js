import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const FriendForm = props => {
  const [friendInfo, setFriendInfo] = useState({
    name: '',
    age: '',
    email: ''
  });
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friendsReducer.friends);

  const handleChanges = event => {
    setFriendInfo({ ...friendInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    dispatch({ type: 'SET_IS_LOADING', payload: true });
    axios
      .post('http://localhost:4000/api/friends', friendInfo, {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(response => {
        console.log(response);
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: 'SET_IS_LOADING', payload: false });
      });
  };

  return (
    <div>
      <h4>Add Friend Form</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChanges}
          value={friendInfo.name}
        />
        <input
          type='text'
          name='age'
          placeholder='Age'
          onChange={handleChanges}
          value={friendInfo.age}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          onChange={handleChanges}
          value={friendInfo.email}
        />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
