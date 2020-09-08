import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendCard from './FriendCard';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [friend, setFriend] = useState({
    id: 1,
    name: '',
    age: '',
    email: '',
  });

  const [update, setUpdate] = useState({
    name: '',
    age: '',
    email: '',
  });

  useEffect(() => {
    axiosWithAuth()
      .get()
      .then((res) => {
        console.log('axiosWithAuth RESPONSE: ', res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log('axiosWithAuth ERROR: ', err);
      });
  }, []);

  const addFriend = (e) => {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', friend)
      .then((res) => {
        console.log('friends: ', friends);
        console.log('friend: ', friend);
        setFriends([...friends, res]);
      })
      .catch((err) => {
        console.log('addFriend ERROR: ', err);
      })
  };

  const updateFriend = (id) => {
    axiosWithAuth()
      .put(`https://localhost:5000/api/friends/${id}`, {
        name: 'Johnny Test',
        age: '14',
        email: 'johnny@test.com',
      })
      .then((res) => {
        setUpdate({ name: 'Johnny Test', age: '14', email: 'johnny@test.com' });
        console.log('updateFriend RESPONSE: ', res);
      })
      .catch((err) => {
        console.log('updateFriend ERROR: ', err);
      })
  };

  useEffect(() => {
    updateFriend(8);
  }, []);

  const removeFriend = (id) => {
    axiosWithAuth()
      .delete(`https://localhost:5000/api/friends/${id}`)
      .then((res) => {
        console.log('removeFriend RESPONSE: ', res);
      })
      .catch((err) => {
        console.log('removeFriend ERROR: ', err);
      });
  };

  useEffect(() => {
    removeFriend(11);
  }, []);

  const onChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
      id: friends.length + 1,
    });
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={friend.name}
          onChange={onChange}
        />
        <br />
        <label htmlFor='age'>Age: </label>
        <input
          type='text'
          name='age'
          id='age'
          value={friend.age}
          onChange={onChange}
        />
        <br />
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          id='email'
          value={friend.password}
          onChange={onChange}
        />
        <br />
        <button type='submit'>Add</button>
      </form>
      {friends.map((friend) => (
        <FriendCard friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;