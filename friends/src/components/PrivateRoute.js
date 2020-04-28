import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...props }) => {
    // const PrivateRoute = props => {
    // const Component = props.component;
    //const theRest = {} built a object that has all keys but component
    return (
      <Route
        {...props}
        render={() => {
          if (localStorage.getItem("token")) {
            return <Component />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  
  export default PrivateRoute;
  