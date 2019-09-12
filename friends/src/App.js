import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
// import Protect from './components'

function App() {

  return (
    <div className="App">
     
        <Link to="/login">Login</Link>
        <br /><br />

      <Link to="/friends">Friends!</Link>
      <br /><br />
      
      <PrivateRoute path='/friends'  component = {FriendsList} />
      <PrivateRoute path='/add'  component={AddFriend} />
      <Route path = "/login" component={Login}/>
    </div>
  );
}



export default App;

