import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import FriendDisplay from './components/FriendDisplay';
import MakeFriendForm from './components/MakeFriendForm';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/friends">Friend List</Link></li>
          <li><Link to="/makefriend">Make A Friend</Link></li>
        </ul>
        <Switch>
          <PrivateRoute path="/friends" component={FriendDisplay} />
          <PrivateRoute path="/makefriend" component={MakeFriendForm} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
