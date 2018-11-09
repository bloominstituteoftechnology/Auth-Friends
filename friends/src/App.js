import React, { Component } from 'react';
import './App.css';
import FriendForm from './FriendForm';
import Friends from './Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendForm/>
      <Friends/>
      </div>
    );
  }
}

export default App;
