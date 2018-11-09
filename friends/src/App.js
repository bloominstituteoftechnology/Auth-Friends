import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Friends from './components/Friends'
import CreateFriendForm from './components/CreateFriendForm'
import UpdateFriendForm from './components/UpdateFriendForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Friends in React-Redux.
          </p>
          <CreateFriendForm />
          <Friends /> 
          <UpdateFriendForm />

        </header>
      </div>
    );
  }
}

export default App;
