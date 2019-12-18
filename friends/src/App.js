import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import Login from './components/login';

function App() {
  return (

    <Router>
      <div className="App">

        <Switch>
          <PrivateRoute
          path = "/protected"
          component={FriendsList}
          />
          <Route 
          path="/login" 
          component={Login} 
          />
          <Route 
          component={Login} 
          />
        </Switch>


      
      </div>
    </Router>
    
  );
}

export default App;
