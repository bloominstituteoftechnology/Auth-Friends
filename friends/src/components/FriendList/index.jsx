import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = props => {
  const friends = props.friends.slice().reverse();
  return (
    <div className="friend-list">
      {friends.map(friend => {
        return (
          <Link to={`/api/friends/${friend.id}`} key={Math.random()}>
            <div className="friend-card">{friend.name}</div>
          </Link>
        );  
      })}
    </div>
  )
}

export default FriendList;