import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"

import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/friends">Protected Page</Link>
      </div>
      <Switch>
        <Route path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
        <Route path="/addfriend" component={AddFriend} />
      </Switch>

    </Router>
  );
}

export default App;
