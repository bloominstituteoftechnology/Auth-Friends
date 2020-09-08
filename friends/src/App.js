import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Link to='/api/login'>Login Form</Link>
        </Route>
        <Route exact path='/api/login'>
          <Login />
        </Route>
        <PrivateRoute exact path='/api/friends'>
          <FriendsList />
        </PrivateRoute>
        <PrivateRoute exact path='/api/friends/:id'>
          <Friend />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export default App;
