import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/friends/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <Router>
      <Route path='/login' render={(props) => <Login {...props} />}  />
      <PrivateRoute exact path='/friends' component={FriendsList}  />
    </Router>
  );
}

export default App;
