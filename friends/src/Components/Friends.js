import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsCard from './FriendsCard';
import FriendsForm from './FriendsForm';

const Friends = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          setFriends(res.data)
          })
        .catch(err => {
            console.log('err', err);
        });
  }, [])

    return (
      <div>
        <FriendsForm />
        <FriendsCard key={friends.id} friends={friends}/>
      </div>
    )

}

export default Friends;