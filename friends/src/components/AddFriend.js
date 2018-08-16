import React from 'react';

const AddFriend = props => {
  return (
    <div>
      <form onSubmit={props.submit} className='add-friend'>
        <input name='newName' placeholder='Enter name' type='text' value={props.name} onChange={props.change} />
        <input name='newAge' placeholder='Enter age' type='number' value={props.age} onChange={props.change} />
        <input name='newEmail' placeholder='Enter email' type='email' value={props.email} onChange={props.change} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddFriend;
