import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
