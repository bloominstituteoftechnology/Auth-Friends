import React from 'react';
import { Route } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import FriendsList from '../components/FriendsList';
import AddFriendForm from '../components/AddFriendForm';

const Routes = () => {
  return (
    <>
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/friends" exact component={FriendsList} />
      <PrivateRoute path="/friends/add" exact component={AddFriendForm} />
    </>
  );
};

export default Routes;
