import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/friends">Login</Link>
            </li>
            <li>
              <Link to="/friends">Protected Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;