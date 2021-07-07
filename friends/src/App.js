import React from 'react';
import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <Link to="/login">Login</Link><br/>
        <Link to="/friends">Friends</Link>
      </header>
      <Switch>
        <PrivateRoute exact path='/friends' component={Friends}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>


    </Router>
  );
}

export default App;
