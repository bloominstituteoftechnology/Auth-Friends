import React from 'react';

export const Friend = props => {
  return (
    <div className="friendCont">
      <h1 className="name">{props.name}</h1>
      <div className="age">{props.age}</div>
      <div className="email">{props.email}</div>
    </div>
  );
};
