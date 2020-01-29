import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';
import FriendForm from './FriendForm';

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

  const addFriend = newFriend => {
    axiosWithAuth().post('/friends', newFriend)
      .then(res => {
        console.dir(res);
        setFriends(res.data)
      })
      .catch(err => console.log(err));
  }

  const deleteFriend = friendId => {
    axiosWithAuth().delete(`/friends/${friendId}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  const editFriend = (id, editedFriend) => {
    axiosWithAuth().put(`/friends/${id}`, editedFriend)
      .then(res => {
        setFriends(res.data)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {friends && !isLoading && (
      <FriendForm addFriend={addFriend} />
    )}
    <div className="grid-view">
      {friends && !isLoading && (
        friends.map(friend => <Friend key={friend.id} friend={friend} deleteFriend={deleteFriend} editFriend={editFriend} />)
      )}
    </div>
    </>
  );
}

export default FriendsList;