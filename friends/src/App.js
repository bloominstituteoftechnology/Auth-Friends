import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List!</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
