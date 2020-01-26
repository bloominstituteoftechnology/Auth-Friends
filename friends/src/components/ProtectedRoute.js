import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }) {
  let loggedIn = localStorage.getItem("token");

  return (
    <Route {...rest}>
      {loggedIn ? <Component /> : <Redirect to="/login" />}
    </Route>
  );
}
