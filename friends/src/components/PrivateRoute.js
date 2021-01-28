import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// This PrivateRoute checks to see if a token is avaialable,
// if so it returns a <Component with all the props
// if not it redirects you to '/login'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (<Route {...rest}
        render={
            (props) => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />
                } else {
                    return (<Redirect to='/login' />)
                }
            }
        } />)
}

export default PrivateRoute 