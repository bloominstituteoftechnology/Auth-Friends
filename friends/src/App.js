import './App.css';
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div className="App">
     <h1>Friends!</h1>
      <nav>
          <Link to='/'>Login</Link>
          <Link to='/friends'>Friends</Link>
      </nav>
  
    
     <Switch>
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path='/' component={Login} />
     </Switch>
    </div>
  );
}

export default App;
