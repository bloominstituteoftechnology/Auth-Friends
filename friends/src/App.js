import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

const App = () => {
  return (
    <div>
      <AddFriend />
      <FriendsList />
    </div>
  );
};

export default App;
