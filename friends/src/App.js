import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Login from './components/Login'; 
import Header from './components/Header'; 
import FriendsList from './components/FriendsList'; 
import PrivateRoute from './components/PrivateRoute'; 


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} /> 
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
