import React from 'react';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default Friend;
