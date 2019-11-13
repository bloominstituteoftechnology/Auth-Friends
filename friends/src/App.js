import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,Link,Redirect } from 'react-router-dom'
import Login from "./Login"
import Account from "./Account"
import ProtectedRoute from "./ProtectedRoute"
function App() {
  return (
    <div>
      <Link to="/">Home</Link> 
      <Link to="/login">login</Link> 
      <Link to="/Account">Account</Link> 
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/Account" component={Account} />
      </div>
      
  );
}

export default App;
