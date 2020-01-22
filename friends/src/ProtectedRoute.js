import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...resOfProps}) => {
    return (
        <Route
            {...resOfProps}
            render={props => {
                if (localStorage.getItem('token')){
                    return <Component {...props} />;
                }
                return <Redirect to='/home' />;
            }}
            />
    );
};

export default ProtectedRoute;