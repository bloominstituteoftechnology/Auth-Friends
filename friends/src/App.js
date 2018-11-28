import React, { Component } from 'react';
import Friendslist from "./component/FriendsList"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mi Amigos!</h1> 
        <FriendsList />
      </div>
    );
  }
}

export default App;
