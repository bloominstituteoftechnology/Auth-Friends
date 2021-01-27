import React, { useState, useEffect } from 'react'
import Friend from './Friend';
import { axiosWithAuth } from '../utlis/axiosWithAuth';
import {Link} from 'react-router-dom';


export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [featuredFriend, setFeaturedFriend] = useState({}); 

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        setFriends(res.data);
        setFeaturedFriend(res.data[0])
      })
      .catch(err => {
        console.log(err.response);
      })
  }, [])

  const setFriend = friendId => {
    console.log(friendId); 
    const featured = friends.filter(friend => friend.id === friendId);
    setFeaturedFriend(featured[0]);
  }

  return (
    <div className='friends'>
      <div className='friends-container'>
        <Friend friend={featuredFriend} setFriend={setFriend} featuredFriend={featuredFriend}/>
        {friends.map(friend => {
          if (friend.id !== featuredFriend.id ) {
            return (
              <Friend friend={friend} setFriend={setFriend} featuredFriend={featuredFriend} key={friend.id}/>
            )
          }
          return '';
        })}
      </div>
      <Link to='/add'>Add Friend</Link>

    </div>
  )
}
