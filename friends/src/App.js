import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path="/friends" component={Friends}/>
        <Route path="/login" component={Login}/>
        {/* <Route component={Login}/> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;
