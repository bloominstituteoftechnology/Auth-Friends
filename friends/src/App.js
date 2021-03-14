import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    
      <div className='App'>
        <nav>
            <Link to='/'>LOGIN |</Link>
            <Link to='/protected'>FRIENDS |</Link>
            <Link to='/protected'>LOGOUT</Link>
        </nav>

          <Switch>
            <PrivateRoute path='/protected' component={FriendsList}/>
              <Route path='/login' component={Login}/>
              <Route path='/' component={Login}/>
            </Switch>
          </div>
      
    )
  }

export default App;
