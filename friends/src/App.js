import React, { Component } from 'react';
import Friends from './components/Friends.js'
import './App.css';
import CreateFriendForm from './components/CreateFriendForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
      </div>
    )
  }
}

export default App;
