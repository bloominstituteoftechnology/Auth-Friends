import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { Route, Link, Switch } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Link to="/login">Login</Link>
         <Link to="/protected">Protected Page</Link>
      
          <Switch>
            <ProtectedRoute exact path ='/protected' component= {FriendsList}/>
            <Route path='/login' component ={Login} />
            <Route component={Login} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
