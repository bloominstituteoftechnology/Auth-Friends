import React, { Component } from 'react';
import './App.css';

import { FriendsListView } from './views';
import Navigation from './components/Navigation';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <FriendsListView />
      </div>
    );
  }
}

export default App;
