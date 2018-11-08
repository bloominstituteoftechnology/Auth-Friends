import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/FriendsList';
import CreateFriendForm from './components/CreateFriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List!</h1>
        <CreateFriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
