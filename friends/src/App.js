import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import CreateFriend from './components/CreateFriend'
import './App.css';
import PrivateRoute from "./authorization/PrivateRoute.js"
import UpdateFriend from './components/UpdateFriend';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/newfriend">Create a New Friend</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path='/' component={Friends} />{/* Friends is the homepage, if not logged in, we'll get redirect to Login */}
        <PrivateRoute path='/newfriend' component={CreateFriend} />
        <PrivateRoute path='/updatefriend' component={UpdateFriend} />

      </div>
    </Router>
  );
}

export default App;
