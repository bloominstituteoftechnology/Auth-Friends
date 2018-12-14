import React from 'react';

const Friend = props => {
  return(
    <div>
      <h5>{props.friend.name}</h5>
      <p>Age: {props.friend.age}</p>
      <p>E-mail: {props.friend.email}</p>
    </div>)
};

export default Friend;
