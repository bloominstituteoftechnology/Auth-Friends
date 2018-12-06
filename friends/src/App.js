import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <FriendsForm />
      </div>
    );
  }
}

export default App;
