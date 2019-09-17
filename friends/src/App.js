import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components 
import Login from './components/Login';
import FriendsList from './components/FriendsList';
// import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friends">Friends List</Link>
        </li>
      </ul>
      <Switch>
        {/* <PrivateRoute exact path="/protected" component={FriendsList} /> */}
        <Route path="/friends" component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
