import React from 'react';
import { deleteFriend } from '../actions';
import { connect } from 'react-redux';

const Friends = props => {
  return (
    <div>
      <h1>Friends</h1>
      {props.friends.map((friend, index) => {
        return (
          <ul key={index} id={index} style={{ listStyle: 'none' }}>
            <li>Name: {friend.name}</li>
            <li>Age: {friend.age}</li>
            <li>Email: {friend.email}</li>
            <button onClick={() => props.deleteFriend(index)}>Delete</button>
          </ul>
        );
      })}
    </div>
  );
};

export default connect(null, { deleteFriend })(Friends);
