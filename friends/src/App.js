//import software
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
//import components
import LoginForm from './components/Login';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div classname="App">
      <div>
        <ul>
          <Link classname="nav" to="/login">
            Login
          </Link>
          <Link classname="nav" to="/protected">
            Protected Page
          </Link>
        </ul>
      </div>

      <Route exact path="/login">
        <LoginForm />
      </Route>
      <ProtectedRoute path="/protected" component={Friends} />
    </div>
  );
}

export default App;
