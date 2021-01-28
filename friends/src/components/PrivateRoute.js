import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
1. Wrap the a plain Route component and pass in the same props.
2. Check to see if we are logged in, and if so, render component
3. If the user is not logged in, we redirect to login
*/

const PrivateRoute = ({component: Component, ...rest}) =>  {
    return(<Route {...rest} render={
        (props) => {
            if (localStorage.getItem("token")) {
                return <Component {...props}/>;
            } else {
                return(<Redirect to='/login'/>);
            }
        }
    }/>);
};

export default PrivateRoute;