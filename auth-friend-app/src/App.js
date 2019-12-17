import React from "react";
import "./App.css";
import { Login } from "./Login";
import ListFriends from "./Friends";
import { Route, NavLink } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink exact to="/friends">
          Friends
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={ListFriends} />
      </header>
    </div>
  );
}

export default App;
