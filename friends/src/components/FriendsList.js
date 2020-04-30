import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
 
  useEffect(() => {
    axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(res);
      setFriends(res.data)
    })
    .catch(err => {
      console.log('problem here', err)
    })
  }, []);

    return (
      <div>
        {friends.map(friend => (
          <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    )
}

export default FriendsList;