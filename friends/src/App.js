import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to ='/protected'>Friends List</Link>
          </li>
          <li>
            <Link to ='/addfriend'>Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute path='/protected' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route path='/addfriend'  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
