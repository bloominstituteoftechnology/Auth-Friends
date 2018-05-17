import React, { Component } from 'react';
import logo from './logo.svg';
import Friends from './components/friends';
import FriendForm from './components/friendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I'm a list of Christina's Friends</h1>
        </header>
         <Friends  />
      </div>
    );
  }
}

export default App;
