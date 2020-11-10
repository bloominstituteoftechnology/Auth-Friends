import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import LoginForm from "./components/LoginForm";

import Friends from './components/Friends';
import FriendsList from './components/FriendsList';

import PrivateRoute  from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page(friends List)</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/friends" component={Friends} />
          <Route path="/login" component={LoginForm} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
