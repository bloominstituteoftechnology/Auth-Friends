import React from 'react';

const Friend = props => {
  return (
    <li className="Friend">
      <h3>{props.friend.name}</h3>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </li>
  );
};

export default Friend;
