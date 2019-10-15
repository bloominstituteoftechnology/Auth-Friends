import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import { axiosWithAuth } from '../utilities/axiosAuth';
import Friend from './Friend';
const FriendsList = props => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => {
        setFriends(res.data);
      });
  }, []);

  return (
    <>
      <Menu {...props} />
      {friends.map(friend => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </>
  );
};

export default FriendsList;
