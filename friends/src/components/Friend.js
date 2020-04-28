import React from 'react';

function Friend({ friend }) {

  return (
    <div>{friend.name}: {friend.age} years old, {friend.email}</div>
  );

}

export default Friend;
