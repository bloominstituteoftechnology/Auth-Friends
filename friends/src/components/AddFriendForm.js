import React from 'react';


export const AddFriendForm = (props) => {
  return (
    <div className='add-a-friend'>
      <form onSubmit={props.addFriend}>

        <input 
          name='name'
          value={props.name}
          placeholder='Name...'
          type='text'
          onChange={props.handleChange}
        />

        <input 
          name='age'
          value={props.age}
          placeholder='Age...'
          type='number'
          onChange={props.handleChange}
        />

        <input 
          name='email'
          value={props.email}
          placeholder='Email...'
          type='text'
          onChange={props.handleChange}
        />   

        <button onClick={props.addFriend}>POWA OF FRIENDSHIP!</button>

      </form>
    </div>
  )
}