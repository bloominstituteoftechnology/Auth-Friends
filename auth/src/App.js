import React from 'react'
import {Form} from './Form'
import {Link, Route} from 'react-router-dom'
import Friends from './Friends'
import PrivateRoute from './Private'

export const App = () => {

    return ( 
        <div>
        <Link to='/login'>Login</Link>
        <Link to='/protected'>Protected</Link>

        <Route path='/login' component={Form} />
        <PrivateRoute path='/protected' component={Friends} />
        </div>
    )
}