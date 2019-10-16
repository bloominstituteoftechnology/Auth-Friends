import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import FriendsList from './components/FriendsList'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Friends App!</h1>
        <Switch>
          <Route exact path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>      
      </div>
    </Router>
  );
}

export default App;
