import React, { Component } from 'react';

import './App.css';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';

const App = (props) => {
  return (
    <div className="App">
      <h2>Friends:</h2>
      <Friends />
      <h2>Add New Friend:</h2>
      <AddFriend />
    </div>
  );
}

export default App;
