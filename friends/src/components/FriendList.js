import React from 'react';

import Friend from './Friend';

const FriendsList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend, i) => (
        <Friend key={i} friend={friend} />
      ))}
    </div>
  );
};

export default FriendsList;