import React from 'react';

import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


const App = (props)=>{
  return (
    <div className="App">
      <h1>Friends List</h1>
      <AddFriend/>
      <FriendsList/>
      {
        // *Create Delete Component
        // *Create Update Friend Component
      }
    </div>
  );
}

export default App;