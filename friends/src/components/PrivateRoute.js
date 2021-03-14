import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} 
    render={() => {
      if (localStorage.getItem('authToken')) {
        return <Component />
      }
      else {
        return <Redirect to='/'/>
      }
    }}
    />
  )
}

export default PrivateRoute;