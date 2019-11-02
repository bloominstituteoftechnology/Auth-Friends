import React from 'react';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import './App.css';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={LoginForm} />
      <ProtectedRoute exact path='/friends' component={FriendsList} />
    </div>
  );
}

export default App;