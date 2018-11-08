import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import UpdateFriend from './components/UpdateFriend';
import FriendsList from './components/FriendsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to='/Add'>Home</NavLink>

        {/* <Route path="/Add" component={AddFriend} /> */}
        <Route path="/update/:id" component={UpdateFriend} />
        <h1>My New Friends</h1>
        <FriendsList  />

      </div>
    );
  }
}

export default App;
