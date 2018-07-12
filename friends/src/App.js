import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Directory of Friends</h1>
        </header>
        <Friends />
      </div>
    );
  }
}

export default App;
