import React, { Component } from 'react';
import { FriendView, AddFriendView } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendView />
        <AddFriendView />
      </div>
    );
  }
}

export default App;
