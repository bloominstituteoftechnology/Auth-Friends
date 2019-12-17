import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Components.js/Login';
import MyFriendsList from './Components.js/MyFriendList';
import PrivateRoute from './Components.js/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <div>
       <Link to='/Login'>Login</Link>
      
    </div>

    <div>
      <Link to='/myfriendsList'>Friends</Link>
    </div>
    <Switch>
      <PrivateRoute  path="/myfriendslist" component={MyFriendsList} />
      <Route exact path='/' component={Login} />
      <Route component={Login}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
