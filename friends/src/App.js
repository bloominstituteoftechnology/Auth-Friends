import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
// import Protect from './components'

function App() {

  return (
    <div className="App">
     
        <Link to="/login">Login</Link>
        <br />
      <Link to="/friendslist">Friends</Link>
      <br />
      
      
      <Route path = "/login" component={Login}/>
      <Route path = "/friendslist" component={FriendsList}/>
    </div>
  );
}



export default App;
