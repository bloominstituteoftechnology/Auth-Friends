import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
// import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import FriendForm from './components/FriendForm';

function App() {
  return (
    
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
        <PrivateRoute exact path="/protected" component={FriendForm}/>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
    
  );
}

export default App;
