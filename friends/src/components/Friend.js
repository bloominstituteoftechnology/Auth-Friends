import React from 'react';

const Friend = props => (
  <React.Fragment>
    Name: {props.friend.name}
    <br />
    Age: {props.friend.age}
    <br />
    email: {props.friend.email}
    <br />
  </React.Fragment>
);

export default Friend;
