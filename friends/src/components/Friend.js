import React from 'react';

import { FriendCard, DeleteButton } from '../styles/Content';

const Friend = props => {
  const { name, email } = props.friend;
  return (
    <FriendCard>
      <p style={{ marginBottom: '5px', color: `#365899`, fontWeight: 'bold' }}>{name}</p>
      <p>{email}</p>
      <DeleteButton>Delete</DeleteButton>
    </FriendCard>
  );
}

export default Friend;
