import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Link to="/login"> Login Page</Link>
       <Link to="/protected">Protected Page</Link>

    <Route path= "/login" component= {Login} />
    <PrivateRoute exact path = "/protected" component={FriendsList} />

    </div>
  );
}

export default App;
