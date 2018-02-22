import React, { Component } from 'react';

const Friends = props => {
  return (
    <div>
      <ul>
        {props.friends.map(friend => {
          return (
            <li key={friend.id}>
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