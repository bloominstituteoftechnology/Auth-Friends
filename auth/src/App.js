import React from 'react';
import Login from './components/login'
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
    <ul>
      <li>
        <Link to='login'>Login</Link>
      </li>
      <li>
        <Link to='protected'>protected Page</Link>
      </li>
    </ul>
      
      <Login/>
      <Switch>
        <PrivateRoute path='/protected' component={FriendsList}/>
        <Route  path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
