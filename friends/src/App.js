import React, { Component } from 'react';
import './App.css';
import FriendsListView from './views/FriendsListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to the Friends Redux App!</p>
          <FriendsListView />
        </header>
      </div>
    );
  }
}

export default App;
