import React, { useState, useEffect } from 'react';
import Friends from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';


function FriendLists(props) {
  const [ friends, setFriends ] = useState([]);
  const getData = () => {
      axiosWithAuth().get('/friends')
        .then((res) => {
            setFriends(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
        <h2>Friends List</h2>
        <div>
            {friends.map((friend) => (
           <div> <Friends name = {friend.name} age={friend.age} email={friend.email} /></div>
           ))}
        </div>
    </div>
  )
}
export default FriendLists;