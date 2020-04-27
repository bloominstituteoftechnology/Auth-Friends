import React from "react";
import { Route, Redirect } from "react-router-dom";

// mimic the Route component but with auth checks
// 1. API - interface behaves just like Route
// 2. use Route by passing the props to it
// 3. if user is authenticated, then render the component.
//    if not redirect to /login

const PrivateRoute = ({ component: Component, ...props }) => {
  // const PrivateRoute = props => {
  // const Component = props.component;
  //const theRest = {} built a object that has all keys but component
  return (
    <Route
      {...props}
      render={() => {
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
