import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GetFriends from './components/GetFriends';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <div>

            <Link to="/login">Login</Link>
          </div>

          
          <div>

            <Link to="/protected">Protected Page</Link>
          </div>
          
        </div>
        <Switch>
          <ProtectedRoute exact path="/protected" component={GetFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
