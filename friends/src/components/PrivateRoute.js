//replace the "Route" component in our Routing

//PrivateRoute should be able to take in all the same props as <Route/>
//REnder a <Route/> and forward the given props to it
//should check to see if user is authenticated
    //if yes, render the given comp
    // if not, re-route to the login page.

    import React from 'react'
    import { Redirect, Route } from 'react-router-dom'

    function PrivateRoute( {component: Component, ...rest} ){ // component:Component is renaming component to Component. 
        return <Route  {... rest} render ={()=>{
            if (localStorage.getItem('token')){
                //render component
                return <Component/>;
            } else{
                //route to login
               return <Redirect to='/login'/>
            }
        }} /> // render prop replaces the component - you should never have both on the same. 
    }

    export default PrivateRoute;