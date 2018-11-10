import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;
