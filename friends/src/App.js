import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/friends">Friends</Link>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/friends" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
