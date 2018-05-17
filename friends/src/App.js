import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateFriendForm from './components/CreateFriendForm';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateFriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;