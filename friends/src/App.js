import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
