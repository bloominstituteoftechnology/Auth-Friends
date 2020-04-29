import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {
  axiosWithAuth() 
    .get('http://localhost:5000/api')
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

    return (
      <div>
        <h1>here</h1>
      </div>
    )
}

export default FriendsList;