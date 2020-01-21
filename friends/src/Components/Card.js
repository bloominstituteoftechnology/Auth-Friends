import React from 'react';
import Friend from './Friend';

const Card = props => {
  console.log('CARD PROPS', props);
  return (
    <div>
      <h2>Name: {props.name} </h2>
      <p>Age: {props.age} </p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default Card;
