
import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";


import Login from './component/Login';
// import FriendsList from './component/FriendsList';

import './App.css';




function App() {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Jonathan's App</h1>
 <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link >Logout</Link>
        </li>
      </ul>
      <Switch>
      <Route path="/login" component={Login} />
        <Route component={Login} />
        </Switch>
    </div>
    
  );
}

export default App;
