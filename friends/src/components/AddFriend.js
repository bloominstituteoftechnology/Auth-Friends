import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'

const AddFriend = () => {
  const initialState = {
    id: Date.now(),
    name: '',
    age: '',
    email: '',
  }

  const [newFriend, setNewFriend] = useState(initialState)

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    })
  }

  const addingFriend = () => {
    axiosWithAuth().post('/friends', newFriend)
    .then(res => {
      console.log('new friend added!', res)
      setNewFriend(res.data)
    })
    .catch(err => {
      console.log('error adding new friend', err)
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    addingFriend(newFriend)
  }
  
  
  return (
    <div className='login-container'>
      <h2>Add a new friend!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label>
            <input
              id='name'
              name='name'
              type='text'
              value={newFriend.name}
              onChange={handleChanges}
            />
          <label htmlFor='age'>Age:</label>
            <input
              id='age'
              name='age'
              type='text'
              value={newFriend.age}
              onChange={handleChanges}
            />
          <label htmlFor='email'>Email:</label>
            <input
              id='email'
              name='email'
              type='email'
              value={newFriend.email}
              onChange={handleChanges}
          />

          <button 
            className='login-button' 
            type='submit'
            onChange={handleChanges}
            >ADD FRIEND
        </button>
      </form>
    </div>
  )
}


export default AddFriend;