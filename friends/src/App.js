import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends</Link>
        </div>
        <Route path="/login" component={Login} />
        <Route path="/protected" component={FriendList} />
      </div>
    </Router>

  );
}

export default App;
