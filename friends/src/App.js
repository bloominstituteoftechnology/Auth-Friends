import React from 'react';
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'
import Login from './comonents/login'
import {PrivateRoute} from './comonents/privateRoute'
import {FriendsList} from './comonents/friendslist'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Link to='/login' >Log In.</Link>
        <Switch>
        <Route path='/login' component={Login}/>
        {/* <PrivateRoute path='/friendslist' component={FriendsList}/> */}
        </Switch>
      
    </div>
    </Router>
  );
}

export default App;
