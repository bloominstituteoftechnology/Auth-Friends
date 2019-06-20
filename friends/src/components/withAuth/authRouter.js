import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./services";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getUser() !== "" ? <Component {...props} /> : <Redirect to="./login" />
    }
  />
);

export default PrivateRoute;
