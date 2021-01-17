import React, { useState } from 'react'

const AddFriends = (props) => {
  const [friend, setFriend] = useState({
    name: '',
    age: '',
    email: ''
  })
  const handleChange = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }


const addfriend =e=>{
    e.preventDefault();
    props.addNewFriends(friend)
}

  return (
    <div>
      <form onSubmit ={addfriend}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={friend.name}
          onChange={handleChange}
        />
        <input
          type='number'
          placeholder='Age'
          name='age'
          value={friend.age}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={friend.email}
          onChange={handleChange}
        />
        <button>Add Friend</button>
      </form>
    </div>
  )
}
export default AddFriends
