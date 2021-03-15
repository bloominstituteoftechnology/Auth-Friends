import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Friends from './Friends';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <Router>

      <ul>
        <li><Link to='/login'>Login</Link></li>
        <li><Logout /></li>
        <li><Link to='/protected'>Protected</Link></li>
      </ul>
      
      <Switch>

        <PrivateRoute exact path='/protected'>
          <Friends />
        </PrivateRoute>

        <Route path='/login'>
          <Login />
        </Route>

        <Route>
          <Login />
        </Route>

     </Switch>
    </Router>
  );
}

export default App;
