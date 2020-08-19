import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Hello</h1>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/friends' component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
