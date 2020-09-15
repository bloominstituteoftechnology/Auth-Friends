import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';

const FriendForm = () => {
  const [ newFriend, setNewFriend ] = useState({
    id: Date.now(),
    name: '',
    email: '',
    age: ''
  })

  const handleSubmit = event => {
    axiosWithAuth()
      .post('/api/friends', newFriend)
      .then(res => {
        console.log(res)
        alert(`NEW FRIEND ${newFriend.name} added`)
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  const handleChanges = event => {
    // console.log(event);
    return(
      setNewFriend(
        {...newFriend, [event.target.name]: event.target.value}
      )
      )
      console.log('FriendForm', newFriend)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="name" 
        name="name" 
        placeholder="name"
        value={newFriend.name} 
        onChange={handleChanges} 
        style={{"margin" : "10px"}}
        />
      <input 
        type="age" 
        name="age" 
        placeholder="age"
        value={newFriend.age} 
        onChange={handleChanges} 
        style={{"margin" : "10px"}}
        />
      <input 
        type="email" 
        name="email" 
        placeholder="email"
        value={newFriend.email} 
        onChange={handleChanges}
        style={{"margin" : "10px"}}
        />
      <button>Submit</button>
    </form>
  )
}

export default FriendForm; 