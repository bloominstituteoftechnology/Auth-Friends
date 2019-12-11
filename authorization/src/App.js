import React, { useState, Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Reset } from 'styled-reset';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

const PrivateRouter = ({ compnent: Component, ...rest}) => (

  <Route
    {...rest}
    render ={props => 
    localStorage.getItem('token') ? (
      <Component {...props} /> 
    ) : (
      <Redirect to="/" />
    )
    }
    />
);

function App() {
  return (
    <div className="App">
      <Reset />
     

      <Route exact path ="/" component={Login} />
      <PrivateRouter path="/friendsList" component={FriendsList} />
    </div>
  );
}

export default App;
