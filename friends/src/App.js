import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import CreateFriend from './components/CreateFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Friends</h1>
        </header>
        <CreateFriend/>
        <Friends/>
      </div>
    );
  }
}

export default App;
