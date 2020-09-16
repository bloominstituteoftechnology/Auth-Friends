import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <div className="App">
       <Link to="/login">Login</Link>

<Switch>
  
  <PrivateRoute exact path='/protected' component={FriendsList}/>
  <Route path="/login" component={Login} />
</Switch>
    </div>
  );
}

export default App;
