import React from 'react'
import {Redirect, Route} from 'react-router-dom'

function PrivRouter({component: Component, ...rest}) {
    return (
        <Route 
        {...rest}
        render={()=>{
            if(localStorage.getItem('token')) {
                return <Component/>
            } else {
                return <Redirect to='/login' />
            }
        }}
        />
    )
}

export default PrivRouter