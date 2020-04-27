import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Auth Friends!</h1>
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/protected" component={/* insert protected coponent here */} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
