import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App container">
      <Router>
        <Switch>
          <PrivateRoute 
            exact path="/friends" 
            component={FriendsList} 
          />
          <Route path="/login" component={LoginForm} />
          <Route render={props => (
            <LoginForm 
              {...props} 
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn} 
            />)} 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
