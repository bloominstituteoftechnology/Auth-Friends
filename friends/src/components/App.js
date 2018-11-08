//DEFAULT IMPORTS
import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
//ADDED IMPORTS
import { Route, NavLink } from 'react-router-dom'
import FriendsList from './FriendsList'
import CreateFriend from './CreateFriend'
import UpdateFriend from './UpdateFriend'


const App = props => {
  return (
    <div className="App">

      <div className="title-container">
        <h1 class="friend-list-title">Friends List</h1> 
        <NavLink className="add-friend-button" to="/create"><i class="far fa-plus-square"></i></NavLink>
      </div>

      {/*Update and create friends forms*/}
      <Route path="/create" component={CreateFriend} />
      <Route path="/update/:id" component={UpdateFriend} />

      <FriendsList />
    </div>
  );
}

export default App;
