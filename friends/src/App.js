import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList}/>
          <Route path="/loginform" component={LoginForm} />
          <Route component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
