import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
