import React from 'react';

const FriendForm = props => {
  return (
    <div className='FriendForm'>
      <form>
        <input
          name='name'
          placeholder='name'
          value={props.state.name}
        />
        <input
          name='age'
          placeholder='age'
          value={props.state.age}
        />
        <input
          name='email'
          placeholder='email'
          value={props.state.email}
        />
        <button type='submit'>Add Friend</button>
      </form>
    </div>
  );
}

export default FriendForm;