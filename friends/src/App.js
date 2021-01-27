import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/login";
import FriendList from "./components/friendList";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={FriendList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
