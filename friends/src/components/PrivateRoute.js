import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Purpose... Higher order component that will check if your authenticated or not. Uses same API as <Route />
// swap out protected path in applicationCache.js with private route, since props are being passed down to this protected path, need to make sure props are also being passed to PriveRoute
// Then checks if user is AuthenticatorAssertionResponse; if so renders component, if not redirect to /login component

const PrivateRoute = ({ component: Component, ...rest }) => {
    //Pass in component & props^ and destructure them using component: Component, rename it using a capital letter or else we can't render it in JSX
    return (
        //the following allows us to render components with associated props
        <Route
            {...rest} 
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />;
                }
            }}
        />
    );
};

export default PrivateRoute;