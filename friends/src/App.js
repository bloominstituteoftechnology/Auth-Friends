import React, { Component } from 'react';
import './App.css';
import { FriendsListView } from './view';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsListView />
      </div>
    );
  }
}

export default App;
