import React, { Component } from 'react';
import Friends from './components/Friends';
import './App.css';
import CreateFriendForm from './components/CreateFriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">More Friends</h1>
        <CreateFriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;