import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import loginForm from './components/loginForm'
import './App.css';
import Friend from './components/Friend'
import PrivateRoute from './components/PrivateRoute';

function App() {

  const logginIn = () => {
    if(localStorage.getItem('Logged in')){
      return localStorage.getItem('Logged out')
    }
    return false;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn())

  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.setItem('Logged in", false');
    localStorage.removeItem('token')
  }
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Friends Routing</h1>
          <Link to='/login'>Login</Link>
          <Link to='/protected'>Protected Page</Link>
        </header>

        <Switch>
          <PrivateRoute exact path='/protected'/>
          <Route to='/login' component={loginForm}/>
          <Route component={loginForm}/>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
