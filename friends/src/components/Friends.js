import React from 'react';

const Friends = props => {
  return (
    <div>
      <ul>
        {props.friends.map(friend => {
          return (
            <li key={friend.email}>
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Friends;