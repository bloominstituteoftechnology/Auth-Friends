import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...restOfTheComponents}) => {
    return(
        <Route
        {...restOfTheComponents}
        render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />;
            } else {
                return <Redirect to="/login" />;
            }
        }}
        
        />
    )
}

export default PrivateRoute;