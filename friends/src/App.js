import React from 'react'
import './App.css';
import Login from './components/Login'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'
import Friend from './components/Friend'
import FriendForm from './components/FriendForm';

function App() {

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '/login'
  }

  return (
    <div className="App">
      <nav>
        
          <Link to="/login">Home</Link>
          <br></br>
          <Link to="/friends">Friends</Link>
          <br></br>
          <Link to='/friendForm'>Add A New Friend</Link>
          <br></br>
          <Link onClick={logout}> Log Me Out</Link>
          
        
      </nav>
      <Switch>
        <PrivateRoute exact path="/friends" component = {FriendList} />
        <PrivateRoute exact path="/friendForm" component = {FriendForm} />
        <Route path ="/login" component={Login}/>
      </Switch>

       
       {/* <button onClick={logout}>Lougout</button> */}
    </div>
  );
}

export default App;
