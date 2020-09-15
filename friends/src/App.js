import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

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
        {/* >>> 3E (Don't forget to clear tolkens in devtools>Application to test redirect) */}
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
