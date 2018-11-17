import React, { Component } from 'react';
import FriendsList from "./Components/FriendsList";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Here is a small list of my Friends!</h1>
        <FriendsList />
      
      </div>
    );
  }
}
export default App;
