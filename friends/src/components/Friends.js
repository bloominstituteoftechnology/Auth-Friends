import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import FriendsCard from './FriendsCard'

const Friends = (props) => {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newFriend, setNewFriend] = useState({
      name: '',
      age: '',
      email: ''
  })
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          setFriends(res.data)
          setIsLoading(false)
          })
        .catch(err => console.log(err))
  }, [submit])

  const handleChange = (e) => {
    e.preventDefault()

    setNewFriend({
        ...newFriend,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    axiosWithAuth()
        .post("/api/friends", newFriend)
        .then(response => {
        console.log(response)
        setNewFriend({name: '', age: '', email: ''})
        setSubmit(false)
        })
        .catch(err => err)

}

  
    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                onChange={handleChange}
                value={newFriend.name}
                required
            />
            <input 
                type='number'
                name='age'
                id='age'
                placeholder='Age'
                onChange={handleChange}
                value={newFriend.age}
                required
            />
            <input 
                type='email'
                name='email'
                id='email'
                placeholder='Email Adress'
                onChange={handleChange}
                value={newFriend.email}
                required
            />
            <button type='submit'>Add Friend</button>
        </form>
        {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          
            {friends.map((friend) =>
                <FriendsCard key={friend.id} friend={friend}/>
            )}
        </div>
    )}

      </div>
    )

}

export default Friends