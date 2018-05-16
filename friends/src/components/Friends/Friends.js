import React from 'react';
import Header from '../Header/Header';
import AddFriendForm from '../AddFriendForm/AddFriendForm';
import FriendsList from '../FriendsList/FriendsList';

const Friends = () => {
  return (
    <React.Fragment>
      <Header title={'Friends'}/>
      <AddFriendForm />
      <FriendsList />
    </React.Fragment>
  );
}
 
export default Friends;