import React from 'react'
import './App.css';
import Login from './components/Login'
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendList from './components/FriendList'

function App() {

  const logout = (e) => {
    e.preventDefault();
    localStorage.remove('token');
    window.location.href = '/login'
  }

  return (
    <div className="App">
      <nav>
        
          <Link to="/login">Home</Link>
          <Link to="/friendsProtected">Friends</Link>
          
        
      </nav>
      <Switch>
        <PrivateRoute exact path="/friendsProtected" component = {FriendList} />
        <Route path ="/login" component={Login}/>
      </Switch>

       
       <button onClick={logout}>Lougout</button>
    </div>
  );
}

export default App;
