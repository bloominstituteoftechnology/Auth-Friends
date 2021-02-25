import React from 'react';
import { Link } from 'react-router-dom';

export default function Friend(props) {
  const { friend, setFriend, featuredFriend } = props;
  

  const handleClick = e => {
    setFriend(e.target.dataset.id * 1);
  }

  return (
    friend.id === featuredFriend.id
    ? <div className='featured-container'>
        <div className='friend'>
        <h4>{friend.name}</h4>
        <ul>
          <li>Age: {friend.age}</li>
          <li>{friend.email}</li>
        </ul>
      </div>
    </div>
    : <div className='friend'>
      <h4>{friend.name}</h4>
      <Link to={`/friends/${friend.id}`} onClick={handleClick} data-id={friend.id}>view </Link>
    </div>
  )
}
