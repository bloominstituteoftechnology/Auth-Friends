import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/login/Login';
import Header from './components/header/Header';
import FriendsList from './components/friendslist/FriendsList';
import PrivateRoute from './auth/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
