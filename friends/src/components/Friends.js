import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import ProtectedRoute from './ProtectedRoute';

const Friends = () => {
  const [friendsList, setFriendList] = useState([]);
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: '',
  });
  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then((res) => {
        setFriendList(res.data);
      })
      .catch((err) => console.log({ err: 'Not getting your friends', err }));
  }, []);

  function handleChange(e) {
    setNewFriend({ [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then((res) => {
        setNewFriend([...friendsList, res.data]);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <h1>Welcome to the Friends page!</h1>
      <h3>Add a new Friend!</h3>
      <form onSubmit={handleSubmit}>
        {/* <label>
        id
        <input name="id" value={newFriend.id} onChange={handleChange} />
      </label> */}
        <label>
          name <input name="name" value={newFriend.name} onChange={handleChange} />
        </label>
        <label>
          age <input name="age" value={newFriend.age} onChange={handleChange} />
        </label>
        <label>
          email <input name="email" value={newFriend.email} onChange={handleChange} />
        </label>
        <button>Add new friend!</button>
      </form>
      {friendsList.map((friend) => {
        return (
          <div className="friend">
            <h3>{friend.name}</h3>
            <h3>{friend.age} years old</h3>
            <h3>{friend.email}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Friends;
