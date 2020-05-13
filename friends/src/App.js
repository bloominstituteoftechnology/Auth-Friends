import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import HomePage from './components/HomePage'
import './App.css';

function App() {
  
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route path='/' component={HomePage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
