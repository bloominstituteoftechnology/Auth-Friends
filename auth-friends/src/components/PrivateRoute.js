import React from "react";
import { Route, Redirect } from "react-router-dom";

// ...rest = rest operator
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        // this area of the code is where you'll edit
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