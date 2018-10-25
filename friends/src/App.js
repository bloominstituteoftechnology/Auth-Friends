import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendView from './view/friendView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendView />
      </div>
    );
  }
}

export default App;
