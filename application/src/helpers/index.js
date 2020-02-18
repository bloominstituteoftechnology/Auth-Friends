import React from "react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: token
        }
    });
};

export const PrivateRoute = ({ component: Component, ...props }) => {
    console.log('What are my PrivateRoute props', props)
    return (<Route
        {...props}
        render={routeProps =>
            props.isLoggedIn ? (
                <Component {...routeProps} {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />);
};
