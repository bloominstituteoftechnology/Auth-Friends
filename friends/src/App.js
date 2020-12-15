import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import FriendsList from "./Components/FriendsList";
import PrivateRoute from "./Components/PrivateRoute";

import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Friends List</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <Switch>
            <PrivateRoute path="/protected" component={FriendsList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
