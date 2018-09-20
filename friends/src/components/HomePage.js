import React from 'react';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';
const HomePage = () => {
  return (
    <React.Fragment>
      <FriendsList />
      <FriendForm />
    </React.Fragment>
  );
};

export default HomePage;
