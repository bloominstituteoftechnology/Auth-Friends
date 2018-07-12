import React from 'react';

import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <FriendForm />
      <FriendsList />
    </div>
  );
}

export default App;
