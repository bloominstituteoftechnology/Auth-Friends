import React from 'react';
import { Route, Link } from 'react-router-dom'
import Form from './Form';

const Friend = props => {
  console.log('in friend', props.friend)
  const deleteFriend= (event) => {
    props.delete(props.friend.id);
    props.history.push('/');
    window.location.reload();
  }

  return (
    <div className='friend-container'>
    <div className='friend-card'>
      <div className='delete-button' onClick={deleteFriend}>
        x
      </div>
      <Link to={`/${props.friend.id}/edit`}>
      <div className='edit-button button'>
        Edit
      </div>
      </Link>
      <h3>{props.friend.name}</h3>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
    </div>
  )
}

export default Friend;
