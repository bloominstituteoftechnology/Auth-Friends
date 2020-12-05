import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';



function App() {

  const logout = () => {
    localStorage.removeItem('token')
  };

  return (
    <Router>
      <div>

      <Link to="/api/login">Login</Link>
      <Link onClick={logout}>Logout</Link>

      <Link to="/protected">Protected Page</Link>
      
      <Switch>
      <PrivateRoute exact path="/protected" component={Friends}/> 
      <Route path="/api/login" component={Login} />
      <Route component={Login} /> 
      
      {/* //dont know if i need this route */}

      </Switch>

      </div>
    </Router>
  );
}

export default App;
