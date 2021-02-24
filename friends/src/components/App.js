import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Login from './Login';
import Logout from './Logout';
import FriendList from './FriendList';

// import { axiosWithAuth } from '../utils/axiosWithAuth';

function App () {

    return ( 
        <div className="App">
            <ul>
                <Link to="/login">Login</Link>
                {/* <Link onClick={logOut}>Logout</Link> */}
                <Link >Logout</Link>
               <Link to="/friends">Friends Page</Link>
            </ul>
            <Switch>
                <PrivateRoute exact path="/friends" component={FriendList} />
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout} />
                <Route component={Login}/>
            </Switch>
        </div>
    )
}

export default App;