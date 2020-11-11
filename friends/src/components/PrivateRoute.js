import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

/* 
Private Route Rules: 
    1. It has teh same API as <Route />
    2. It renders a <Route /> and passes all the props through to it
    3. It check is the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user to /login
*/

export const PrivateRoute = ({ component: Component, ...rest}) => {
    const token = window.localStorage.getItem('token');
    return ( 
        <Route 
            {...rest}
            render={(props) => {
                if (token) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};
