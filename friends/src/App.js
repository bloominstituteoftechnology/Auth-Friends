import React from "react";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <span className="title"> Friends </span>
          <div className="links">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
            </ul>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;