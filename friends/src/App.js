import React from 'react';
import FriendsList from './components/FriendsList';
import Login from './components/Login';

import PrivateRoute from './components/PrivateRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NewFriend from './components/NewFriend';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <PrivateRoute exact path='/Friends' component={FriendsList} />
          <PrivateRoute path='/NewFriend' component={NewFriend} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
