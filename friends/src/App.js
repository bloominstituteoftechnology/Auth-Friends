import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
          <Link to='/login'>Login</Link><br />
        
          <Link to='/protected'>Friends List</Link>
      
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/protected' component={FriendsList}/>
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
