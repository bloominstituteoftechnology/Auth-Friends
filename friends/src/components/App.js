import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
// import CreateFriendForm from './CreateFriendForm';
import Friends from './Friends'

const App = props => {
    return (
      <div className="App">
        <NavLink to="/create">Create</NavLink>
       
        //route path for update for UpdateFriend
        <Friends/>
      </div>
    );
}

export default App;
