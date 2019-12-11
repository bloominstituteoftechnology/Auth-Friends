import React from "react";
import { Route } from "react-router-dom";
import { Login } from "Views";

const Routes = () => (
  <>
    <Route exact to="/" component={Login} />
  </>
);

export default Routes;
