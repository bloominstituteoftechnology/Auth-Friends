import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import HomePage from './HomePage'
import LoginForm from './LoginForm'
import FriendForm from './FriendForm'

const AppRouter = () => {
    
    return (
        <>
            <Switch>
                <Route path ='/login' component={LoginForm} />
                <PrivateRoute path ='/' exact component={HomePage} />
                <PrivateRoute path='/add-friend' component={FriendForm} />
                <PrivateRoute path='/update-friend' component={FriendForm} />
            </Switch>
        </>
    )
}

export default AppRouter