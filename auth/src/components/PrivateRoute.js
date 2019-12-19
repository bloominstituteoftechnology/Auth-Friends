import React, { Component } from 'react'

import {Route, Redirect} from 'React-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if(localStorage.getItem('token')){
                return <Component {...props}/>
            }else {
                return <Redirect to='/login'/>
            }
        }}
        />
    )
}

export default PrivateRoute;