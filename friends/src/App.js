import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Friends from './Friends';
import Login from './Login';

function App() {
  return (
    <Router>
      
      <ul>
        <li><Link>Login</Link></li>
        <li><Link>Logout</Link></li>
        <li><Link>Protected</Link></li>
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
