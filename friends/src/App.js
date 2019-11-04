import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { getToken } from './utils/api';
import Logout from './components/Logout';

function App() {

  const signedIn = getToken();

  return (
    <div className="App">
      <nav className="nav-header">
        {!signedIn && <Link 
          to='/Login'
          className='link'>Login
        </Link>}

        {signedIn && <Link 
          to='/FriendsList'
          className='link'>Friends
        </Link>}

        {signedIn && <Link
          to='/logout'
          className='link'>Logout
        </Link>}
      </nav>

      <Route 
        exact path='/login'
        component={Login}
      />
      
      <ProtectedRoute 
        exact path='/FriendsList'
        component={FriendsList}
      />

      <ProtectedRoute 
        exact path='/Logout'
        component={Logout}
      />
     
    </div>
  );
}

export default withRouter(App);
