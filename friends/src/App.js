import React from 'react';
import './App.css';
import Login from "./components/Login"
import FriendsList from "./components/FriendsList";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">View Friends</Link>
          </li>
        </ul>
    
      <Route path="/login" component = {Login}/>
      <Route exact path="/"component={Login}/>
      <PrivateRoute path="/friends">
        <FriendsList/>
      </PrivateRoute>
    

    </div>
  );
}

export default App;
