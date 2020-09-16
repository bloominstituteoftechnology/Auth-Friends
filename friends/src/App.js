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

          <Link to="/login">Login</Link>

          <Link to="/friends">Friends List</Link>
        </div>
      </div>
    </Router>
  );
}

export default App;
