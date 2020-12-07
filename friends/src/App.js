import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  // possibly for use within component
  const logout = () => {
    localStorage.removeItem('token')
  };


  return (
    <Router>
      <div className="App">
      <header className="App-header">
        
        <h1>
          Hang With Friends !
        </h1>
       
      </header>

      <ul>
        <li>
          <Link to="/login">Log-In</Link>
        </li>
        <li>
          <Link to="/friendlist">My Friends</Link>
        </li>
        <li>
          <Link to ="/add">Add a Friend</Link>
        </li>
        <li>
          <Link to="/update">Add/Delete</Link>
        </li>
        <li>
          <Link to={logout}>LogOut</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" />
        <PrivateRoute />
        <PrivateRoute />
        <PrivateRoute />
        <PrivateRoute />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
