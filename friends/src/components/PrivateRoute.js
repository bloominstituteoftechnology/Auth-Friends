import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    // const Component = component;
    const token = window.localStorage.getItem('token');
    return (
      <Route
        {...rest}
        render={props => {
          if (token) {
            // return the component
            return <Component {...props} />;
          } else {
            // redirect the user to /login
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;