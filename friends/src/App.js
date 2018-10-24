import React, { Component } from 'react';
import './App.css';

import Friends from './components/Friends.js'

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
