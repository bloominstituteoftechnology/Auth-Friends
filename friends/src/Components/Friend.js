import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Card from './Card';
import FriendForm from './FriendForm';

const Friend = () => {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friendsReducer.friends);
  console.log('GETTING FRIENDS', friends);

  useEffect(() => {
    const getFriends = () => {
      axios
        .get('http://localhost:4000/api/friends', {
          headers: { Authorization: localStorage.getItem('token') }
        })
        .then(response => {
          console.log('Response from server', response);
          dispatch({ type: 'SET_FRIENDS', payload: response.data });
        })
        .catch(error => {
          console.log(error);
        });
    };
    getFriends();
  }, []);

  return (
    <div>
      <FriendForm />
      <h1>Friend Component</h1>
      {friends.length > 0
        ? friends[0].map(friend => {
            console.log('FRIEND', friend);
            return (
              <div>
                <h2>Name: {friend.name} </h2>
                <p>Age: {friend.age} </p>
                <p>Email: {friend.email}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Friend;
