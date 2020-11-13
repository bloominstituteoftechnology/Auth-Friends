import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';


function App() {


  const logout = () => {
    localStorage.clear();
  };


  return (
    <Router>
      <div className="App">
        <header>
          <h3><Link to="/login">Log In</Link></h3>
          <h3><Link to="#" onClick={logout}>Log Out</Link></h3>
          <h3><Link to="/dashboard">Dashboard</Link></h3>
        </header>
      
        <Switch>
          
          <Route exact path="/login" component={Login}/>
          <PrivateRoute path="/dashboard" component={FriendsList}/>
          
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
