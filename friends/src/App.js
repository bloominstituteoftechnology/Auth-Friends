import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <Link to="/login">Login</Link><br/>
        <Link to="/friends">Friends</Link>
      </header>
      <Switch>
        <Route exact path='/friends' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>


    </Router>
  );
}

export default App;
