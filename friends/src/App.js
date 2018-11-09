import React, { Component } from 'react';
import './App.css';
import Friend from './components/friend';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Redux Friends</h1>
      <Friend/>
     
      </div>
    );
  }
}

export default App;
