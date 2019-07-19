import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import Login from './Login';

import './App.css';

function App() {
  return (
    <div className='App'>
      <PrivateRoute exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
