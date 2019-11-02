import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    const {
        component: Component,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem('token')) {
                return <Component {...renderProps} />
            } else {
                return <Redirect to='/login' />
            }
        }} />
    )
}

export default ProtectedRoute

// 'C'omponent upperCase so we can use it as a component.
// ...renderProps =  access to all the props, send them all.
// ...rest everything except the component value