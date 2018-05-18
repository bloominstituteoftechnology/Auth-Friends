import React from 'react';
import Header from '../Header/Header';
import FriendsList from '../FriendsList/FriendsList';

const Friends = () => {
  return (
    <React.Fragment>
      <Header title={'Friends'} iconLogo={'fas fa-user-friends'}/>
      <FriendsList />
    </React.Fragment>
  );
}
 
export default Friends;