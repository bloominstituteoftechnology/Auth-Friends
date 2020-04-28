import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      window.localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
