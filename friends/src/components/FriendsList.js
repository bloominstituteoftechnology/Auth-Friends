import React, { useEffect, useState } from 'react'
import FriendsCard from './FriendsCard'
import axiosWithAuth from '../utils/axiosWithAuth'
import AddFriends from './AddFriends'

const FriendsList = () => {
  const [friends, setFriends] = useState([])

  const addNewFriends = item => {
    const newFriend = {
      id: Date.now(),
      name: item.name,
      age: item.age,
      email: item.email
    }
  setFriends([
    ...friends,newFriend
  ])
  }

  useEffect(() => {
    axiosWithAuth()
      .get('/friends', {})
      .then(res => {
        setFriends(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='friends-container'>
      <div>
        {friends.map(friend => (
          <FriendsCard friends={friend} />
        ))}
      </div>
      <AddFriends addNewFriends={addNewFriends} />
    </div>
  )
}

export default FriendsList
