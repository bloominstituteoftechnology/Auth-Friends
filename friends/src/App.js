import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
      <Router>
        <div>
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/login'>Logout</Link>
            <Link to='/friendslist'>Friends List</Link>
          </nav>
        <Switch>
          <Route path='/friendslist' component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
      </Router>
  )
  
}

export default App;
