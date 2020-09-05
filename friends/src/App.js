import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from '../src/components/login'

function App() {
  return (
    <Router>
      <div className="App">

            <Link to="/login">Login</Link>

      </div>

      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
