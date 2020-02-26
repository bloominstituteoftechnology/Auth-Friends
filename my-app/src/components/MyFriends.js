import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../utils/AxiosWithAuth'

import AddFriend from './AddFriend.js'
import Friend from "./Friend.js"

const MyFriends = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get("/friends")
    .then(res => setFriends(res.data))
    .catch(err => console.error(err))
  })

  return(
    <>
      <AddFriend />
      <h1>MY FRIENDS!</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          <Friend banana={friend} />
        </div>
      ))}
    </>
  )

}

export default MyFriends; 