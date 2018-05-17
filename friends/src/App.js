import React, { Component } from 'react';

import GetFriends from './components/GetFriends';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetFriends />
      </div>
    );
  }
}

export default App;
