import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div>

      <Link to="/api/login">Login</Link>
      <Link to="/api/friends">Friends</Link>

     

      
      <Switch>
      {/* <PrivateRoute exact path="/api/friends" />  */}
      <Route path="/api/login" component={Login} />


      </Switch>
      {/* Need to add component here*/}

      </div>
    </Router>
  );
}

export default App;
