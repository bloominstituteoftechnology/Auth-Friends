import './App.css';

import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth'

import PrivateRoute from './components/PrivateRoute'

import LoginForm from './components/Login'
import Friends from './components/Friends'


function App() {
  const logout = () => {
    axiosWithAuth().post('./logout')
      .catch(err => console.error('cannot log you out, try again'));
    localStorage.removeItem('token');
  };


  return ( 
    <Router>
    <div className="App">
      <header className="App-header">
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/login' onClick={logout}>Log Out</Link></li>
            <li><Link to='/friends'>Friends List</Link></li>
       </ul>
 <Switch>
            <PrivateRoute exact path='/friends' component={Friends}/>
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
        </header>
       
    </div>
    </Router>
 
  );
}

export default App;
