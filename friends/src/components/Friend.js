import React from 'react';

const Friend = (props) => {
  return (
    <div>
      <h1 onClick={() => props.updateForm(props.friend)}>
        {props.friend.name}
      </h1>
    </div>
  );
};

export default Friend;