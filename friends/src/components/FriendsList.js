import React from 'react';

import Friend from './Friend';

import { FriendsContainer, FriendsWrapper } from '../styles/Content';

const FriendsList = ({ friends }) => {
  return (
    <FriendsContainer>
      <FriendsWrapper>
        {friends.map((friend, i) => (
          <Friend key={i} friend={friend} />
        ))}
      </FriendsWrapper>
    </FriendsContainer>
  );
};

export default FriendsList;
