import React from 'react';

const Friends = props => {
  return (
    <ul>
      {props.friends.map(friend => {  // creates new state
        return <li key={friend.id}> {friend.name} </li>;
      })}
    </ul>
  );
};

export default Friends;
