import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendLists from './components/FriendLists';
import './App.css';
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
      .catch(err => console.error('unable to logout'));
      localStorage.removeItem('token');
    }
  return (
    <Router>
    <div className="App">
      <li>
        <Link to ='/login'>LOGIN</Link>
      </li>
      <li>
        <Link to = '/logout' onClick={logout}>LOG OUT</Link>
      </li>
      <li>
        <Link to ='/protected'>Friends List</Link>
      </li>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendLists}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch> 
    </div>
    </Router>   
  );
}

export default App;
