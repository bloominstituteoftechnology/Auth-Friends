import React from 'react';

import Friend from './friend';

const FriendsList = ({ friends }) => {
  const renderFriends = () => friends.map(friend => <Friend key={friend.id} friend={friend} />);

  return <ul>{renderFriends()}</ul>;
};

export default FriendsList;
