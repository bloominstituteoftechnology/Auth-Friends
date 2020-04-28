import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsAddForm from './components/FriendAddForm';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to ="/protected "> Protected Friends List</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute  exact path="/protected" component={FriendsAddForm}/>
        <Route path="/login" component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
