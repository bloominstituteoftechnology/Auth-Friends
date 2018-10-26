import React from 'react';
import { Link } from 'react-router-dom';




const Friend = props => {

  let classList = 'friend-container ';
   if (props.friend.id % 3 === 0){
      classList += 'three'
    } else {
      if (props.friend.id % 2 === 0){
        classList += 'two'
      } else {
      if (props.friend.id % 1 === 0){
        classList += 'one'
      }
    }
  }

  const deleteFriend= (event) => {
    props.delete(props.friend.id);
    props.history.push('/');
    window.location.reload();
  }

  return (
    <div className={classList}>
    <div className='friend-card'>
    <div className='buttons'>
      <div className='delete-button button' onClick={deleteFriend}>
        <i className="fas fa-trash"/>
      </div>
      <Link to={`/${props.friend.id}/edit`}>
      <div className='edit-button button'>
        <i className="fas fa-user-edit"/>
      </div>
      </Link>
      </div>
      <h3>{props.friend.name}</h3>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
    </div>
  )
}

export default Friend;
