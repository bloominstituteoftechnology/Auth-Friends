import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from '../src/components/Login'
import FriendForm from '../src/components/FriendForm'
import PrivateRoute from '../src/components/PrivateRoute'
import Friend from '../src/components/Friend'

function App() {


  return (
    <Router>
      <div className="App">
            <Link to="/Login">Login</Link>
            <Link to="/friend">Protected</Link>
      </div>

      <Switch>
        <PrivateRoute exact path ="/friend" component={Friend} />
        <Route path="/Login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
