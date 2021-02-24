import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

import FriendsList from "./components/FriendsList";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Test App Header</h1>
        <ul>
          <li>
            <Link to="/login"> Login </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="protected" component={FriendsList} />
          <Route path="/login" component={LoginForm} />
          <Route component ={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
