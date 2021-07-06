import React from 'react'
import { Route, Redirect } from 'react-router-dom';

//1. same API as Route
//2. render a <Route /> and passes the props to it
//3. check if we have auth token. if so, we redirect to /login

const  PrivateRoute = ({component: Component, ...rest}) => {
    return (
         <Route  
            { ...rest}
            render = {() =>{
                //check if authed
            
                if (localStorage.getItem('authToken')){
                    return <Component/>; //return component if authed
                }
                //redirect to /login if not
                console.log('redirecting to log in ')
                return <Redirect to = '/login'/>
            }}
            />
    );
           
}

export default PrivateRoute;