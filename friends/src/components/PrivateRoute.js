import { Redirect, Route } from "react-router-dom";

import React from "react";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Route {...rest} component={Component} />;
  }
  return <Redirect to="/" />;
};
