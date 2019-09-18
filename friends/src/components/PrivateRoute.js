import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it. ==> ?? <Route {...props} />
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
      //  renders a <Route /> and passes all the props through to it.
      <Route 
      // spread 'rest' of props bc component is removed as we destructure it as ==> ?? `component: Component,`
        {...rest} 
        render={() => {
          if(localStorage.getItem('token')) { 
          // if token is in localStorage > render the given component
            return <Component />
          } else {
            // anytime this is rendered to the DOM is takes us to the provided `to` 
            return <Redirect to="/login" />
          }
        }}
      />
    )
}

export default PrivateRoute;
