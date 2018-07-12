import React, { Component } from 'react';
import '../App.css';
import FriendsList from '../containers/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends!</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
