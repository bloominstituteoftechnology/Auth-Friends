import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

// rest operator(looks a lot spread operator)
const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;