import React from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import Login from './comonents/login'
import {PrivateRoute} from './comonents/privateRoute'
import {FriendsList} from './comonents/friendslist'
import {Form} from './comonents/friendForm'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Link to='/login' >Log In.</Link>
          <Link to='/friendslist'>See Friends</Link>
          <Link to='/friendForm' >Add Friend</Link>
        <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/friendslist' component={FriendsList}/>
        <PrivateRoute path='/friendForm' component={Form}/>
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
