import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Login.js";
import PrivateRoute from "./PrivateRoute.js";
import FriendsList from "./FriendList";

const Navigation = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendslist">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friendslist" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;