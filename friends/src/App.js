import React from 'react';
import './App.css';

//router
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import Login from '../src/components/Login';
import FriendsList from '../src/components/FriendsList';

//privateRoute
import PrivateRoute from '../src/components/PrivateRoute';
import FriendsForm from './components/FriendsForm';


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/friendsList">Friends List</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friendsList" component={FriendsList}/>
        <PrivateRoute component={FriendsForm}/>
      <Route path='/login' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
