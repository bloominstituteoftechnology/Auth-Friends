import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Protected/AxiosWithAuth';

import './Home.scss';
import CreateFriend from '../Friends/CreateFriend'
import Friend from '../Friends/Friend'


function Home() {
  const [friends, setFriends] = useState()
  console.log('friends init: ', friends)

  useEffect(() => {
    console.log('we hit axios with auth')
    axiosWithAuth()
      .get('http://localhost:5000/api/friends/')
      .then(response => {
        setFriends(response.data);
        console.log('we in da .then response.data: ', response.data)
      })
      .catch(event => {
        console.log('we hit the catch');
      });
  }, []);

  return (
    <div className='home-container'>
      <CreateFriend setFriends={setFriends} />
      <div className='friends-list'>
       {friends === undefined ? (<div className='loader'>loading</div>) : friends.map(friend => <Friend friend={friend} />)}
      </div>
    </div>
    );
}

export default Home;
