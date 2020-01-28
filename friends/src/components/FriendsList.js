import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

function FriendsList({ friend }) {
  const [friends, setFriends] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    axiosWithAuth().get('/friends')
      .then(res => {
        // console.dir(res);
        setFriends(res.data)
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid-view">
      {friends && !isLoading && (
        friends.map(friend => <Friend key={friend.id} friend={friend} />)
      )}
    </div>
  );
}

export default FriendsList;