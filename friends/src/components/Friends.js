import React, { useState, useEffect } from 'react'
import Friend from './Friend';
import { axiosWithAuth } from '../utlis/axiosWithAuth';


export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [featuredFriend, setFeaturedFriend] = useState({}); 

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  }, [])

  const setFriend = friendId => {
    const featured = friends.filter(friend => friend.id === friendId);
    setFeaturedFriend(featured[0]);
  }

  return (
    <div className='friends'>
      <div className='friends-container'>
        {friends.map(friend => {
          return (
            <Friend friend={friend} setFriend={setFriend}/>
          )
        })}
      </div>
      <button>Add Friend</button>

    </div>
  )
}
