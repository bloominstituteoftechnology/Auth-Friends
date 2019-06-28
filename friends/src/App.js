import React from 'react';
import HomePage from './components/HomePage'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

import './App.css';

import { Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route
          path='/'
          exact
          render={() => (
            <HomePage />
          )}
        />
        <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        />
        <PrivateRoute
          path="/protected"
          exact
          component={Friends}
        />
      </div>
    )
  }

}
