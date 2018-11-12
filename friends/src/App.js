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
        <NavLink to='/Add'>Add Friend</NavLink>

        <h1>My New Friends</h1>
        <Route path="/update/:id" component={UpdateFriend} />
        <FriendsList  />
        <Route path="/Add" component={AddFriend} />
      </div>
    );
  }
}

export default App;