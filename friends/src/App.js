import React, { useState, useEffect } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from './components/Protected/PrivateRoute'
import axios from 'axios';

import './App.scss';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('testing for infinite loop')
  }, [token]);

  console.log('App CL token: ', token);

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>React app</h1>
        <Link className='app-link' to='/'>
          Home
        </Link>
        {token === null ? (
          <Link className='app-link' to='/login'>
            Login
          </Link>
        ) : (
          <Link to='/login'>
            <button className='btn' onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </button>
          </Link>
        )}
      </header>
      <div className='app-body'>
        <PrivateRoute exact path='/' component={Home} />
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
      </div>
    </div>
  );
}

export default App;
