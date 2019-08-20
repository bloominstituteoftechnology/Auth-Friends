import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">My Friends</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <h1>Admin Tools</h1>
        <button onClick={(e) => {
          localStorage.removeItem('token')
          window.alert("Removed token! Good luck with testing.")
          }}>Clear Local Storage</button>
      </div>
    </Router>
  );
}

export default App;
