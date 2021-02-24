import React from 'react';
import { Redirect, Route } from "react-router-dom";


function PrivateRoute({ component, ...rest }) {
    return <Route {...rest} 
    render={ () => { 
    if (localStorage.getItem('token')) {
        return
    } else{
        <Redirect to="/login" />
    }

    }} />;
        
}

export default PrivateRoute;