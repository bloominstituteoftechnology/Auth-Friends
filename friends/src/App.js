import React from 'react';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Index</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
