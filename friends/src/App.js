import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import axiosWithAuth from './axiosAuth';

const PrivateRoute = ({ component: Component, ...reset }) => (
  <Route {...rest} 
  render={props => 
  localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/login"/>
  )
} />
)

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/friendList'>FriendsList</Link>
      </nav>
        <Route path='/login' component={Login}/>
        <Route path='/friendList' component={FriendsList}/>
      </Router>
    </div>
  );
}

export default App;
