import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) => {
            //checking local storage for a token
            if (localStorage.getItem("token")) {
                return <Component {...props} />;
            //redirecting the user to the login route w/o token
            } else {
                return <Redirect to="/login" />;
            }
            
        }}
        />
    );
};