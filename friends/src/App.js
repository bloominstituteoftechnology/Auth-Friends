import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from './components/Friends';
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>An Authentic Friends Experience</h1>
          <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>
        </header>
        {/* <div className='login-field'> */}
        <Switch>
          <PrivateRoute path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
        </Switch>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
