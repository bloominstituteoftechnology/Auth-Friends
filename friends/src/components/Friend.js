import React from 'react';

const Friend = props => {

  const deleteFriend= (event) => {
    console.log(props.friend.id); 
    props.delete(props.friend.id);
  }

  return (
    <div className='friend-card'>
      <div className='delete-button' onClick={deleteFriend}>
        x
      </div>
      <h3>{props.friend.name}</h3>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  )
}

export default Friend;
