import { Route, Redirect } from 'react-router-dom';
import React from 'react'; 

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
        {...rest}
        render={() => {
            if(localStorage.getItem("token")) {
                return <Component /> 
            } else {
                return <Redirect to="/login" /> 
                }
            }}
        />
    )
}

export default PrivateRoute;