import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from '../src/components/Login'
import FriendsList from '../src/components/FriendsList'
import PrivateRoute from '../src/components/PrivateRoute'


function App() {
  return (
    <Router>
      <div className="App">
            <Link to="/Login">Login</Link>
            <Link to="/protected">Protected</Link>
      </div>

      <Switch>
        <PrivateRoute exact path ="/protected" component={FriendsList} />
        <Route path="/Login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
