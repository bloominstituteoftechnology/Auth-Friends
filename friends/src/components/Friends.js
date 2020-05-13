import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import FriendsCard from './FriendsCard'
import AddFriend from './AddFriend'

const Friends = () => {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          setFriends(res.data)
          setIsLoading(false)
          })
        .catch(err => console.log(err))
  }, [])

    return (
      <div>
        <AddFriend />
        {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <FriendsCard key={friends.id} friends={friends}/>
      )}

      </div>
    )

}

export default Friends