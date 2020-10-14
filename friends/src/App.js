import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute"

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <Switch>
            <PrivateRoute exact path="/friends" component={Friends} />
            <Route path="/login" component={Login} />
          </Switch>
        </ul>

      </div>
    </Router>

  )
}

export default App;
