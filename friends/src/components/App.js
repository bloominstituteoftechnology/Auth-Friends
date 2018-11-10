import React, { Component } from 'react';

import FriendsList from './FriendsList'
import CreateFriend from './CreateFriend';


const App = props => {
  return (
    <div className="App">
      <CreateFriend />
      <FriendsList />
    </div>
  );
}

export default App;
