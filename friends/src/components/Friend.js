import React from 'react';

const Friend = props => {
  const { name, age, email } = props.friend;
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};

export default Friend;
