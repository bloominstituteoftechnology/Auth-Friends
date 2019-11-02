import React from 'react';
import { Link, Route } from 'react-router-dom';
import { getToken } from './utils/api';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Account from './components/Account';
import Logout from './components/Logout';


import './App.css';

function App() {
  const signedIn = getToken()

  return (
    <div className="wrapper">
    <div className="App">
      {/* <div className="form"></div> */}
        <nav>
        <Link to='/'>Home</Link>

          {!signedIn && <Link to="/login">Login</Link>}
          {signedIn && <Link to="/account">My Account</Link>}
          {signedIn && <Link to="/logout">Logout</Link>}
        </nav>

      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/account' component={Account} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
    </div>
  );
}

export default App;
