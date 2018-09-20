import React from 'react';

const Friend = () => {
  return (
    <li className="Friend">
      <h3>{props.friends.name}</h3>
      <p>Age: {props.friends.age}</p>
      <p>Email: {props.email.age}</p>
    </li>
  );
};

export default Friend;
