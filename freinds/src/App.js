import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import CreateFriendForm from './components/CreateFriendForm';

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
