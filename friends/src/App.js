
import React from "react";
import { Route, Link, Switch, useHistory } from "react-router-dom";

import './App.css';

function App() {
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
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
