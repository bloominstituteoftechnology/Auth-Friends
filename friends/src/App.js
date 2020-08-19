import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute.js'
import Friends from './components/Friends'


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends Page</Link>
        </nav>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
