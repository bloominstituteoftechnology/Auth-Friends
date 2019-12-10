import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../Components/Login";
import FriendsList from '../Components/FriendsList';

const PrivateRoute = ({ component: Component, ...theRest }) => (
  
  <Route 
  {...theRest}
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
      <Route exact path='/' component={Login} />
      
      <PrivateRoute path='/friends' component={FriendsList} />
    </div>
  )
}

export default Routes;
