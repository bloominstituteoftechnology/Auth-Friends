import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend'


function App() {

  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div>
      <ul>
        <li>
      <Link to="/login">Login</Link>
      </li>
      <li>
      <Link onClick={logout}>Logout</Link>
      </li>
      <li>
      <Link to="/friends">Friends List</Link>
      </li>
      <li>
      <Link to="/add">Add Friend</Link>
      </li>
      </ul>
      <Switch>
      <PrivateRoute exact path="/login" component={Login}/> 
      <Route path="/protected" component={Friends} />
      <Route  path="/protected" component={AddFriend} /> 

      {/* //dont know if i need this route */}

      </Switch>

      </div>
    </Router>
  );
}

export default App;
