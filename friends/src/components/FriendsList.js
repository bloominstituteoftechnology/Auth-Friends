import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../axiosAuth';
import Friend from './Friend';

function FriendsList() {
  const test = [1, 2, 3]
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
        <Friend key={friend.id} friend={friend} />
      )}
    </div>
  );
}

export default FriendsList;
