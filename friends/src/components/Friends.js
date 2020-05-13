import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../util/axiosWithAuth'
import FriendsCard from './FriendsCard'

const Friends = () => {
  //hook for the complete friends list from the API
    const [friends, setFriends] = useState([])
  //hook for a boolean for when data isLoading or not
    const [isLoading, setIsLoading] = useState(false)
  //hook for the constructor for a newFriend
    const [newFriend, setNewFriend] = useState({name: '',age: '',email: ''})
  //hook for boolean for when form is submitted (to call the useEffect hook when a new 
  //Friend is added)
    const [submit, setSubmit] = useState(false)
//this sets loading to true, gets the list of friends from the api, sets that data to
//friends state, then sets loading to false when its done.
    useEffect(() => {
      setIsLoading(true)
      axiosWithAuth()
        .get('/api/friends')
        .then(res => {
          setFriends(res.data)
          setIsLoading(false)
          })
        .catch(err => console.log(err))
        //it will be called when the submit hook is called as well
  }, [submit])
//handleChange function to update newFriend
  const handleChange = (e) => {
    e.preventDefault()

    setNewFriend({
        ...newFriend,
        [e.target.name]: e.target.value
    })
}
//handleSubmit function
const handleSubmit = (e) => {
    e.preventDefault()
    //setSubmit to true while making the axios call
    setSubmit(true)
    axiosWithAuth()
    //psots newFriend to the API
        .post("/api/friends", newFriend)
        .then(response => {
        console.log(response)
    //setNewFriend to blank values to reset the form
        setNewFriend({name: '', age: '', email: ''})
    //setSubmit back to false because we're done here
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
        {/* while isLoading is true you will see this div, otherwise you will see
         the friends data from the first hook mapped out */}
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