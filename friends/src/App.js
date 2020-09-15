import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

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
      </ul>
      <Switch>
        <Route path="/login" component={Login} />

      </Switch>
    </div>
  );
}

export default App;
