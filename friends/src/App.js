import React from "react";
import "./App.css";
import Login from "./Component/login";
import { Route, Link, withRouter, Router, Redirect } from "react-router-dom";
import Friends from "./Component/friends";

function App() {
  return (
    <div className='App'>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Link to='/FriendList'>
        <button>FriendList</button>
      </Link>
      <PrivateRoute path='/FriendList'>
        <Friends />
      </PrivateRoute>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  const checkToken = localStorage.getItem("token");
  return (
    <Route {...rest}>{checkToken ? children : <Redirect to='/login' />}</Route>
  );
}
export default withRouter(App);
