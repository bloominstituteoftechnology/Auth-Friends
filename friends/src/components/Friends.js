import React from 'react';

export const Friends = props => {
  return (
    <div>
      <h1>Friends</h1>
      {props.friends.map((friend, index) => {
        return (
          <ul key={index} style={ { listStyle: 'none'} }>
            <li>Name: {friend.name}</li>
            <li>Age: {friend.age}</li>
            <li>Email: {friend.email}</li>
          </ul>
        );
      })}
    </div>
  );
};
