import React from 'react';

const Friend = (props) => {
  return (
    // console.log('friend', props),
    <div>
      <h1 onClick={() => props.displayUpdateForm(props.friend)}>
        {props.friend.name}
      </h1>
    </div>
  );
};

export default Friend;
