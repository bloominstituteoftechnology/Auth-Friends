import React, { Component } from 'react';

import './App.css';

import FriendsList from './components/FriendsList/FriendsList';
import FriendInput from './components/FriendInput/FriendInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App component</h1>
          <FriendInput />
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
