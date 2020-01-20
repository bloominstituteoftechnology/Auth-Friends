import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
        return (
        <Route
            {...rest}
            render={() => {
                if(localStorage.getItem("token")) {
                    return <Component />;
                } else {
                    console.log('Redirected');
                    return <Redirect to="/login" />;
                }
            }}
            />
        );
}

export default PrivateRoute;