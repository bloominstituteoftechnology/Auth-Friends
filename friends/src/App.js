import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';


function App() {
  const logout = () => {
    localStorage.removeItem("token");
  };
 
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/login" >Login</Link>
            </li>

            <li>
              <Link to="/login" onClick={logout} >Logout</Link>
            </li>

            <li>
              <Link to="/friendsList" >Friends</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <ProtectedRoute exact path="/friendsList" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
