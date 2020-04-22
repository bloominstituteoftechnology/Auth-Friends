import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtecedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
export default ProtecedRoute;

