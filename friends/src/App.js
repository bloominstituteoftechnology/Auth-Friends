import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Components.js/Login';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     
       <Link to='/Login'>Login</Link>
      
    </div>
    <Switch>
      <Route path='/login' component={Login} />
    </Switch>
    </Router>
  );
}

export default App;
