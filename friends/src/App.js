import React, { Component } from 'react';
import './App.css';
import FriendsView from '../src/views/FriendsView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsView />
      </div>
    );
  }
}

export default App;
