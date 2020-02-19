import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm'
import { Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute';
import Friends from './components/Friends'


function App() {
  return (
    <div className="App">
      <PrivateRoute path="/friends" component={Friends}/>
      <Route path="/login" component={LoginForm}/>
    </div>
  );
}

export default App;