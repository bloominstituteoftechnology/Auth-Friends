import React from 'react';

import { FriendCard, DeleteButton } from '../styles/Content';

const imgUrl = 'https://i.pinimg.com/236x/15/6e/14/156e1430a8a7994e7158fd6764f1dfa3--luffy-one-piece.jpg';

const Friend = props => {
  const { name, email } = props.friend;
  return (
    <FriendCard>
      <img
        src={imgUrl}
        alt=''
        style={{ width: '100px', height: '100px' }}
      />
      <div style={{ width: '45%' }}>
        <p style={{
          marginBottom: '5px',
          color: `#365899`,
          fontWeight: 'bold'
        }}
        >
          {name}
        </p>
        <p style={{
          fontSize: '1.3rem',
          color: '#4b4f56'
        }}
        >
          {email}
        </p>
      </div>
      <DeleteButton>Delete</DeleteButton>
    </FriendCard>
  );
}

export default Friend;