import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendListView } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendListView />
      </div>
    );
  }
}

export default App;
