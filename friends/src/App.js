import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";
import NewFriend from "./components/NewFriend";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
      </ul>
      <Switch>
        <ProtectedRoute exact path="/friends" component={FriendsList} />
        <Route path="/newfriend" component={NewFriend} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
