import React from 'react';
import {Route} from 'react-router-dom';

import Login from '../Components/Login';
import FriendsForm from '../Components/FriendsForm';
import Friends from '../Components/Friends';
import FriendsList from '../Components/FriendsList';
import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return (
      <div>
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/protect' component={FriendsForm} />
        {/* <Route exact path='/protected' component={Friends} /> */}
        
        <PrivateRoute path='/friends' component={FriendsList} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </div>
    )
  }

  export default Routes;