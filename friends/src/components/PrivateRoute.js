import React from "react";
import { Route, Redirect } from "react-router-dom";

//the rules are 1. same API as Route
//2. render <Router /> and passes all props through it
//3. checks if user is authenticated, if are, then renders component props if not goes to login

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = window.localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props => {
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