import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Log In</Link>
          </li>
          <li>
            <Link to='/friends'>Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
