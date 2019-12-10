import React from "react";
import { Route, Redirect }  from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
    return (
        <Route 
        {...theRest}
        render={() => {
            if (localStorage.getItem("token")) {
                return <Component />;
            } else {
                console.log(
                    "PrivateRoute.js: Route.render: redirecting"
                );
                return <Redirect to="/login" />;
            } 
        }}
        />
    );
};

export default PrivateRoute; 