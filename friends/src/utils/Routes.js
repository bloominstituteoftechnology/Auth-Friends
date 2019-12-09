import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import FriendsList from '../components/Friends/FriendsList';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={props => 
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  )
}

export default Routes;