import React from 'react';
import { axiosWithAuth } from '../axiosAuth';

function Friend({ friend, setFriends }) {

  const deleteFriend = e => {
    e.preventDefault();
    axiosWithAuth().delete(`/friends/${friend.id}`).then(res => {
      setFriends(res.data);
    });
  }

  return (
    <div>
      {friend.name}: {friend.age} years old, {friend.email}
      <button onClick={deleteFriend}>Delete</button>
    </div>
  );

}

export default Friend;
