import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';

import PrivateRoute from './components/PrivateRoute';

import { axiosWithAuth } from './axiosWithAuth/axiosWithAuth';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(req => {
        localStorage.removeItem('token');
        setLoggedIn(false);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div className="App">
    </div>
  );
}

export default App;
