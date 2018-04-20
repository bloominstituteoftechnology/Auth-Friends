import React from 'react'

export const UpdateFriendForm = prop => (
  <form
    onSubmit={e => {
      e.preventDefault()
      const updates = document.getElementsByClassName('Update--input')
      const UpdatedFriend = {
        name: updates[0].value,
        age: Math.floor(updates[1].value) || 0,
        email: updates[2].value
      }
      console.log(UpdatedFriend)
    }}
  >
    <label htmlFor='name'>Name</label>
    <input type='text' className='Update--input' name='name' />

    <label htmlFor='age'>Age</label>
    <input type='text' className='Update--input' name='age' />

    <label htmlFor='email'>Email</label>
    <input type='email' className='Update--input' name='email' />

    <button type='submit'>Submit</button>
  </form>
)
