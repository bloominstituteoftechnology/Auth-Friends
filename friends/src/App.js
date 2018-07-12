import React, { Component } from 'react';
import './App.css';
import FriendForm from './components/FriendForm';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
