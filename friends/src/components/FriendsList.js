import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get('/friends').then(res => {
      console.log('friends response', res);
      setFriends(res.data);
    });
  }, []);

  return (
    <div>
      {friends.map(friend =>
        <Friend key={friend.id} friend={friend} setFriends={setFriends} />
      )}
      <FriendForm setFriends={setFriends} />
    </div>
  );
}

export default FriendsList;
