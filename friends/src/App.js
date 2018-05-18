import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import FriendForm from './components/CreateFriendsForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Redux-Friends Project</h1>
        </header>
        
        <div className="Main-content">
          <Friends/>
          <FriendForm/>
        </div>

      </div>
    );
  }
}

export default App;
