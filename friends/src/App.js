import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import LogIn from './components/Login';

import './App.css';

function App(){
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to = '/login'> LogIn </Link>
            </li>

            <li>
              <Link to = '/protected'> Protected Pages </Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute path ='/friends' component ={FriendsList} />
            <Route path = '/login' component = {LogIn} />
            <Route component = {LogIn} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default App;