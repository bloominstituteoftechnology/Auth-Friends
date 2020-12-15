import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
    1. It copies exactly the functionality of Route.
    2. It render a passed in route component if the user in authenticated.
    3. It redirect to login if the user is not authenticated.
*/

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
