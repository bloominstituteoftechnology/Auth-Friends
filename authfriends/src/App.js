import React from 'react';
import './App.css';
import ProtectedRoute from './ProtectedRoute';
import LoginForm from './LoginForm';
import {Route,Link} from 'react-router-dom';
import FriendsList from './FriendsList';


function App() {
  const logout = () => {
    localStorage.clear()
  }
  return (
    <div>
      <Link to="/" onClick={logout}>log out</Link>
      <Link to="/protected">protected</Link>
      <Route exact path='/' component={LoginForm}/>
      <ProtectedRoute path='/protected' component={FriendsList}/>
    </div>
  );
}

export default App;
