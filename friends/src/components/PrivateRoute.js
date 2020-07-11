import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                console.log("Private route rendered");
                if (localStorage.getItem("token")) {
                    // if the token is in localStorage, render the given component
                    console.log("token found, logging in");
                    return <Component {...props} />;
                } else {
                    // redirect to login
                    console.log("no token found, redirecting");
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};
export default PrivateRoute;
