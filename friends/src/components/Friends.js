import React, { useState, useEffect } from 'react';
import Friend from './Friend';
// import axios from "axios";
import { axioswithAuth } from '../utils/axioswithAuth';
import FriendForm from './FriendForm';

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axioswithAuth()
      .get('/api/friends')
      .then((res) => {
        setFriends(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
      <FriendForm />
      {friends.map((friend) => {
        return <Friend friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
