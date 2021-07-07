import React from "react";
import { Route, Redirect } from "react-router-dom";

// const isUserAuthenticated = () => {
//   return localStorage.getItem("token") !== null;
// };

export const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
// export default PrivateRoute;
