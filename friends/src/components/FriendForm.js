import React from 'react';

const FriendForm = props => {
  return (
    <div className='FriendForm'>
      <form onSubmit={props.saveFriend}>
        <input
          name='name'
          placeholder='name'
          value={props.state.name}
          onChange={props.handleInput}
        />
        <input
          name='age'
          placeholder='age'
          value={props.state.age}
          onChange={props.handleInput}
        />
        <input
          name='email'
          placeholder='email'
          value={props.state.email}
          onChange={props.handleInput}
        />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
}

export default FriendForm;