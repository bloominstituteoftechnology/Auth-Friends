import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import "./App.css"

import Login from "./components/Login"
import FriendsList from "./components/FriendsList"
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/protected">Protected Page</Link>
      </div>
      <Switch>
        <Route path="/addfriend" component={AddFriend} />
        <Route exact path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route component={Login} />
      </Switch>

    </Router>
  );
}

export default App;
