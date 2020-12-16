import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import Loader from 'react-loader-spinner'
import AddFriend from './AddFriend'
import Friends from './Friends'

const FriendsList = () => {
const [friends, setFriends] = useState([])
const [value, setValue] = useState({})

  useEffect(() => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        setFriends(res.data);
      });
  }, []);

    const handleDelete = (e) => {
    axiosWithAuth()
      .delete(`/api/friends/${e.target.id}`, e.target.id)
      .then((res) => setFriends(res.data));
  };

    const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`api/friends/`, value)
      .then(res => {
        setFriends(...friends, res);
      })
      .catch(err => 
      console.log('ERROR: ', err));
  };

    const handleChange = e => {
    setValue({
         ...value, 
         id: Date.now(), 
         [e.target.name]: e.target.value });
  };

  return (
             <div>
                 {friends.length ? ''
                 : <Loader type="Puff" color="#000000" height="60" width="60"/>}
                 {friends.map(friend => {
                     return <Friends key={friend.id} friend={friend} handleDelete={handleDelete}/>
                 })}
                 <AddFriend onSubmit={handleSubmit} handleChange={handleChange}/>
             </div>
  );
}

export default FriendsList