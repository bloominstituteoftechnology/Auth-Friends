import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
  1. it has the same interface a Route
  2. it renders a <Route /> and pass props to it
  3. it checks if the user has an authentication 
     token and if they do, it renderd the passed in component
  4. if the user does not have an authentication token, it redirects to /login
*/
const PrivateRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={() => {
    // logic for checking if we have an auth token
    if (localStorage.getItem('token')) {
      return <Component />
    }
    return <Redirect to="/login" />
  }} />
}

export default PrivateRoute