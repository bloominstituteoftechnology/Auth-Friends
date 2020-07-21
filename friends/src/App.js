import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Home from './components/Home'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'

import { Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/"><Button>Home</Button></Link>
        <Link to="/login"><Button>Login</Button></Link>
        <Link to="/friends-list"><Button>Friends List</Button></Link>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends-list" component={FriendsList} />
        <PrivateRoute path="/add-friend" component={AddFriend} />
      </Router>
    </div>
  );
}

export default App;
