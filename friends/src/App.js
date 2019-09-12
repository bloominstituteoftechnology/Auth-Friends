import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';
import EditFriend from './components/EditFriend';

function App() {

  return (
    <div className="App">
     
        <Link to="/login">Login</Link>
        <br /><br />

      <Link to="/friends">Friends!</Link>
      <br /><br />
      
      <PrivateRoute path='/friends'  component = {FriendsList} />
      <PrivateRoute path='/add'  component={AddFriend} />
      <PrivateRoute path='/edit/:id'  component={EditFriend} />
      <Route path = "/login" component={Login}/>
    </div>
  );
}



export default App;

