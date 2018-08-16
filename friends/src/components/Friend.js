import React from 'react';

const Friend = props => {
  return (
    <div className='friends-list'>
      <h1>Friends List</h1>
      {props.friends.map(friend => {
        return (
          <div className='friend' key={friend.id}>
            <p>{friend.name}</p>
            <p>Age {friend.age}</p>
            <p>{friend.email}</p>
          </div>
        )}
      )}
    </div>
  );
}

export default Friend;
