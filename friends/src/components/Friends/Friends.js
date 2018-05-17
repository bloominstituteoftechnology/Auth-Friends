import React from 'react';
import Header from '../Header/Header';
import AddFriend from '../AddFriend/AddFriend';
import FriendsList from '../FriendsList/FriendsList';

const Friends = () => {
  return (
    <React.Fragment>
      <Header title={'Friends'}/>
      <AddFriend />
      <FriendsList />
    </React.Fragment>
  );
}
 
export default Friends;