import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
// Couldn't get this to export properly
//import PrivateRoute from './PrivateRoute';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App(props) {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));

  function loginCallback() {
    setLoggedIn(true);
  }

  function logout(event) {
    event.preventDefault();
    localStorage.removeItem('token');
    setLoggedIn(false);
  }

  return (
    <>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {loggedIn && (
            <li>
              <a href="" onClick={logout}>Logout</a>
            </li>
          )}
        </ul>
        <h1>This is the Friends with Auth App</h1>
      </div>
      <Route
        path="/login"
        render={(props)=><Login {...props} loginCallback={loginCallback} />}
      />
      <PrivateRoute path="/friends" component={FriendsList} />
    </>
  );
}

export default App;
