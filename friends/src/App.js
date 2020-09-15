import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import './App.css';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/FriendsList">Friends List</Link>
        </li>
        <li>
          <Link to="/add-friend">Add Friend</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
        <PrivateRoute exact path="/add-friend" component={FriendForm} />
      </Switch>
    </div>
  );
}

export default App;
