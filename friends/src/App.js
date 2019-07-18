import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './App.scss';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
  const token = localStorage.getItem('token');
  console.log(token);

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
            <button className='btn' onClick={() => {localStorage.removeItem('token')}}>
              Logout
            </button>
          </Link>
        )}
      </header>
      <div className='app-body'>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </div>
    </div>
  );
}

export default App;
