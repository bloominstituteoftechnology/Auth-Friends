import React from 'react';

export default function FriendForm(props) {
  return (
    <form onSubmit={props.submitFriend}>
      <input type='text' placeholder='name...' value={props.newName} name='newName' onChange={props.changeHandler} />
      <br/><input type='number' placeholder='age...' value={props.newAge} name='newAge' onChange={props.changeHandler} />
      <br/><input type='email' placeholder='email...' value={props.newEmail} name='newEmail' onChange={props.changeHandler} />
      <br/><button type='submit'>Add New Friend</button>
    </form>
  )
}
