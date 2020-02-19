import React from 'react';
import axios from 'axios';

const FriendsList = () => {
  axios 
    .get('http:localhost:5000/friends')
    .then(res => {
      console.log(res)
    })
}

export default FriendsList;