import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Friends List</h1>
      </header>
      <div className="navigation">
          <Link to="/login">Log In</Link>
          <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
      </div>
    </div>
  );
}

export default App;