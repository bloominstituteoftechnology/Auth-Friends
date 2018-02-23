import React from 'react';
import { deleteFriend } from '../actions/actions';

const Friends = props => {
  return (
    <div>
      <ul>
        {props.friends.map(friend => {
          return (
            <li key={friend.id}>
              <button>Delete Friend</button>
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