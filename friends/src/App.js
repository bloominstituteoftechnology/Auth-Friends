import './App.css';
import React from "react";
import Login from "./components/Login";
import FriendsList from "./components/friendsList";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
        <Link to="/Login">Login</Link>
        <Link to="/protected">Protected Page</Link>
    </div>
        <Switch>
         <Route exact path ="/protected" component={FriendsList} />
          <Route path="/Login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
