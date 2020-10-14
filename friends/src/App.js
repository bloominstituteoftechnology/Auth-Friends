import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login"
import HomePage from "./Components/HomePage"
import ProtectedContent from "./Components/ProtectedContent"
import PrivateRout from "./Components/PrivateRout"

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/protected">Content</Link>
        <Switch>
          <PrivateRout exact path="/protected" component={ProtectedContent} />
          <Route path="/login" component={Login} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
