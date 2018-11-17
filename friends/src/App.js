import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendContainer from './components/FriendContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendContainer />
      </div>
    );
  }
}

export default App;
