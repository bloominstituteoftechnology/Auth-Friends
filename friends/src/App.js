import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import UpdateFriend from './components/UpdateFriend';
import FriendsList from './components/FriendsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to = '/Add'>Home</NavLink>
          <img src={logo} className="App-logo" alt="logo" />
          <Route path = '/Add' component = {UpdateFriend} />
          <h1>My Friends</h1>
          <FriendsList />
      </div>
    );
  }
}

export default App;
