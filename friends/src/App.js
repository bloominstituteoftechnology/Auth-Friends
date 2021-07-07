import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./api/Login";
import {Link, Route, Redirect} from 'react-router-dom';
import FriendsList from "./FriendsList";
import PrivateRoute from "./api/PrivateRoute";
import AddFriend from "./AddFriend";

function App() {


    const removeToken = () =>{
        localStorage.setItem('token','');
        console.log(`token is now ${localStorage.getItem('token')}`);
    }
  return (
    <div className="App">

      <ul>
          <li>
              <Link to='/login'>Login Page</Link>
          </li>
          <li>
              <Link to='/FriendsList'>Friends List</Link>
          </li>
          <li>
              <Link to='/AddFriend'>Add Friend</Link>
          </li>
      </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/FriendsList' component={FriendsList} />
        <PrivateRoute path='/AddFriend' component={AddFriend} />
        <button onClick={removeToken}>remove Token</button>


    </div>
  );
}

export default App;
