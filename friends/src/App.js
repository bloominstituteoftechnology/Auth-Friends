import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to ="/login">Login</Link>
        </div>
        
     <Switch>
     <PrivateRoute path="/protected" component={FriendsList} /> 
    <Route path="/login" component={Login} />
    <Route component={Login} />
     </Switch>

      </Router>
    </div>
  );
}

export default App;
