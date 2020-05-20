import React from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="navigate">
            <Link to='/' ><h3>Home</h3></Link>
            <Link to='/login'><h3>Login</h3></Link>
            <Link to='/friends-list'><h3>Friends</h3></Link>
            <Link to='/add-friend'><h3>Create A Character</h3></Link>
        </div>
     
      <Switch>
        <Route exact path='/login' componet={Login}/>
        <PrivateRoute exact path='/friends-list' componet={FriendList}/>
        <PrivateRoute exact path='/add-friend' component={AddFriend}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
