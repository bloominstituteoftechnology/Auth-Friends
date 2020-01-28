import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Private Route:
// has the same API as <Route />
// renders <Route /> and passes all props to it
// checks if user is authenticated - if they are, render component prop; if not, redirect to "/login"

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return localStorage.getItem('token') ? <Component {...props} {...rest} /> : <Redirect to="/login" />
      }}
    />
  );
};

export default PrivateRoute;