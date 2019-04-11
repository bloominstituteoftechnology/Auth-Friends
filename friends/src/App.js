import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavLink to="/login">Login</NavLink>
          <Route exact path="/" component={null} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
