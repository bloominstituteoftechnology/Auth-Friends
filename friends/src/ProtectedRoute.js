import React from 'react';
// Route / Redirect because it's a protected route and we need to redirect them
import { Route, Redirect } from 'react-router-dom';
// grabbing access to whether they are logged in or not
import { useSelector } from 'react-redux';
// Component is whatever is being wrapped in the protected route
// rest of props is all the props from the components props being brought into it
export const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  // useSelector takes our state and gives us state and we
  const isLoggedIn = useSelector(state => state.root.isLoggedIn);
  console.log(isLoggedIn);
  return (
    // Route needs to render a component (it has to)
    // Then checking if user is logged in, if yes it has a component
    // if false they are redirected
    // props is props coming in from the component, passing to route, then passing to the component
    <Route
      {...restOfProps}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};
