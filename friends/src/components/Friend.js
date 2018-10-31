import React from 'react';

const Friend = props => {
  console.log('Friend props.friend.name', props.friend.name);
  return (
    <div>
      <li>{props.friend.name}</li>
    </div>
  )
}

export default Friend;