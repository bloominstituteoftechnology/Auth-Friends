import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';

const App = () => {
  return (
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
          <Route exact path='/login'>
            <Link to="/api/login">Login</Link>
          </Route>
          <Route exact path ='/api/login'>
            <Login/>
          </Route>
          <ProtectedRoute exact path='/api/friends'/>
            <FriendsList/>
          <ProtectedRoute/>
          <ProtectedRoute exact path='/api/friends/:id'/>
            <Friend/>
          <ProtectedRoute/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
