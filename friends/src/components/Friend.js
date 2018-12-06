import React from 'react';

export default function Friend({friend}) {

  return (

    <div className='friend'>

      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <a href={`mailto:${friend.email}`}>{friend.email}</a>

    </div>

  );

}
