import React, { Component } from 'react';
import FriendsList from './FriendsList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
