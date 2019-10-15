import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendsList = (props) => {

  const [friends, setFriends] = useState([])
  console.log('friends', friends);

  useEffect(() => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res.data);
      setFriends(res.data)
    })
    .catch(error => console.log(error));
  }, []);

return(
  <div>
    {friends.map(friend => (
      <Friend key={friend.id} name={friend.name} age={friend.age} email={friend.email} />
    ))}
  </div>
  )
}
export default FriendsList
