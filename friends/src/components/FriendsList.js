import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState({
    name: '',
    age: '',
    email: ''
  });
 
  useEffect(() => {
    axiosWithAuth
    .get('http://localhost:5000/api/friends/')
    .then(res => {
      console.log(res);
      setFriends(res.friends)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

    return (
      <div>
        <div>{friends.map(friend => (
          <p>{friend.name}</p>
        ))}</div>
      </div>
    )
}

export default FriendsList;