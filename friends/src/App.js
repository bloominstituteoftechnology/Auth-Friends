import React from "react";
import "./App.css";
import Login from "./components/Login";
import Friends from "./components/Friends";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/friends">My Friends</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
