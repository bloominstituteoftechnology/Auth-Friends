import React from "react";
import "./App.css";
import { Login } from "./Login";
import ListFriends from "./Friends";
import { Route, NavLink } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/friends"> Friends </NavLink>
        <NavLink to="/">Login</NavLink>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/friends" component={ListFriends} />
      </header>
    </div>
  );
}

export default App;
