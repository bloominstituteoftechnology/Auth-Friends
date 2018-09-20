import React, { Component } from 'react';
import './App.css';

import FriendListView from './views/FriendListView';
import FriendFormAddView from './views/FriendFormAddView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendFormAddView />
        <FriendListView />
      </div>
    );
  }
}

export default App;
