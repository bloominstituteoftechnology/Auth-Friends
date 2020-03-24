import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from "./components/Login"
import Friends from "./components/Friends"
import AddFriend from "./components/AddFriend"

import PrivateRoute from "./components/PrivateRoute"




function App() {
  return (
    <div className="App">
      <Router>
       
        <Link to='/login'>LOGIN</Link>
        <Link to='/protected'>FRIENDS</Link>
        <Link to='/add-friend'>ADD FRIENDS</Link>
        
      
        <Switch>
          <Route path="/login" component={Login} /> 
          <PrivateRoute exact path='/protected' component={Friends} />
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
 
        </Switch>

      </Router>
    </div>
  );
}

export default App;