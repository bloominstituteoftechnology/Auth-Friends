import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'


import Login from './components/Login'
import FriendsList from './components/FriendsList'
import NewFriend from './components/NewFriend'

import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login"> Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/addFriend">Add Friend</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList}/> 
        <PrivateRoute exact path="/addFriend" component={NewFriend}/>
        <Route component={Login}/>
      </Switch>
    </div>
  </Router>  
  );
}

export default App;
