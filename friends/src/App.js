import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import axiosWithAuth from './utils/axiosWithAuth';

import{ AddFriendForm } from './components/AddFriendForm';
import { FriendsList } from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

function App() {


  const logout = () => {
    axiosWithAuth().post('/logout')
      .then(res=>{
        localStorage.removeItem('token');
        window.location.href =  '/login';
      })
      .catch(err=>{
        console.log(err);
      })
  };



  return (
    <Router>
      <div className="App">
      <nav>
        <Link to='/login'>Login</Link>
          <p></p>
        <Link to='/friendsList'>Add Friends</Link>
          <p></p>
          <Link to='/friendsList'>Friends List</Link>
            <p></p>
          <Link onClick={logout}>Logout</Link>
      </nav>
        
      </div>

      <Switch>
      <PrivateRoute exact path='/friendsList' component={FriendsList} />
      <PrivateRoute exact path='/addFriend' component={AddFriendForm} />
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
