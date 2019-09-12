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
        <br /><br />

      <Link to="/protected">Protected</Link>
      <br /><br />
      
      <PrivateRoute path='/protected'  component = {FriendsList} />
      <Route path = "/login" component={Login}/>
      {/* <Route path = "/friendslist" component={FriendsList}/> */}
    </div>
  );
}



export default App;

