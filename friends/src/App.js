import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import UpdateFriend from './components/UpdateFriend';
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to = '/Add'>Add Friend</NavLink>
          <Route path = '/Add' component = {AddFriend} />
          <Route path="/update/:id" component={UpdateFriend} />
          <h1>My Friends</h1>
          <FriendsList />
      </div>
    );
  }
}

export default App;
