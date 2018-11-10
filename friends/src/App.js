import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import AddForm from './Components/AddFriend';
import FriendsList from './Components/FriendsList';
import FriendProfile from './Components/FriendProfile';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>We have friends!</header>
        <NavLink to="/add">Add a new friend</NavLink>

        <AddForm />

        <Route exact path="/" component={FriendsList} />
        <Route path="/:id" render={ props => <FriendProfile {...props} /> } />

      </div>
    );
  }
}