import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from "./Components/FriendsList";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/friends">Friends List</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
