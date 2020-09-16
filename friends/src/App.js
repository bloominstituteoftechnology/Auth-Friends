import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route>
              <Login />
            </Route>
          </Switch>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/friends">Friends List</Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
