import React from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  axios 
    .get('http://localhost:5000/api/data')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

    return (
      <div>
        
      </div>
    )
}

export default FriendsList;