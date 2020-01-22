import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...theRest }) =>{
    return(
        <Route
            {...theRest}
            render = {()=>{
                if (localStorage.getItem("token")){
                    return <Component/>;
                } else {
                    return <Redirect to="/login"/>;
                }
            }}
        />
    )
}

//test is test

export default PrivateRoute;