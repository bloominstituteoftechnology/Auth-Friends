import React from 'react';

/*
 * Takes in props:
 * -- friend: {}
 * -- key: 0
 */

const Friend = (props) => {
  return (
    <div className='friend'>
      <div className='friendName'>{props.friend.name}</div>
      <div className='friendAge'>{props.friend.age}</div>
      <div className='friendEmail'>{props.friend.email}</div>
    </div>
  );
};

export default Friend;