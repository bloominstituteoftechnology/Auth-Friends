import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

import './App.css';
import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="links">
          
          <Link to="/login">Login</Link>
          
          <Link to="/friendslist">Friends</Link>
        </nav>
        
        <Switch>
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
