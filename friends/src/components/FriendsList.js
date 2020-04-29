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
          <p>{friend.name}</p>
        ))}
        <h1>duh!!!!</h1>


      </div>
    )
}

export default FriendsList;