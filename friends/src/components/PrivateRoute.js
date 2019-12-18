import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Three rules for the PrivateRoute component:
// 1. It has the same API as <Route />.
// 2. It renders a < Route /> and passes all the props through to it.
// 3. It checks if the user is authenticated, if they are, it renders the “component” prop.If not, it redirects the user to / login.

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          // render component from props
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

// const Component = props.component;
// const rest = {
//   path: props.path,
//   exact: props.exact,
//    (Other props that I'm forgetting.....)
// }
