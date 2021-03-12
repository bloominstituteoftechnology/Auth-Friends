import React from "react";
import { Route, Redirect } from "react-router-dom";

// Private Route component:
// 1. Has the same API as <Route />
// 2. It renders a <Route /> and passes the props through to it
// 3. It checks whether the user has an auth token in localStorage.
//    If there's a token: render the component passed in as the "component" prop
//    Otherwise, redirect the user to /login

const PrivateRoute = (props) => {
  const { children, ...rest } = props;

  console.log(children);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
