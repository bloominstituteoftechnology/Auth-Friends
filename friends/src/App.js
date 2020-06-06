import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//components
import Login from './components/login';
import Friends from './components/friends.js';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to= "/login">Login</Link>
          </li>
          <li>
            <Link to ="/protected">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Route path ="/login" component={Login} />
          <Route path = "/protected" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
