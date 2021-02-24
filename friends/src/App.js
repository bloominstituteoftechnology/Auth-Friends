import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList.js'
import { axiosWithAuth } from './utils/axiosWithAuth';

function App() {
  const logout = () => {
    axiosWithAuth().post('/logout')
      .then((res) => {
        localStorage.removeItem('token');
        window.location.href = '/login'
        console.log(window.location.href);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <Router>
      <div className="App">
        <h1>Welcome to the Friends App!</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
          <li>
            {localStorage.getItem('token') && <Link to='/protected'>Friends List</Link>}
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
