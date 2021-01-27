import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

export default function Friend(props) {
  const { friend, setFriend } = props;

  useEffect(() => {
    setFriend(friend.id);
  },[featuredFriend]);

  const handleClick = e => {
    setFriend(e.target.dataset.id * 1);
  }

  return (
    <div className='friend'>
      <h4>{friend.name}</h4>
      <ul>
        <li>Age: {friend.age}</li>
        <li>{friend.email}</li>
      </ul>
      <Link to={`/friends/${friend.id}`} onClick={handleClick} data-id={friend.id}>view </Link>
    </div>
  )
}
