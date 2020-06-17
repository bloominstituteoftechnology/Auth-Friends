import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Switch>
          <Route exact path='/friends' component={FriendsList} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
