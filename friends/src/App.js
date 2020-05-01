import React from 'react';
import './App.css';
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Index</Link>
        <Link to="/login">Login</Link>
      </Router>
      <Switch>
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
