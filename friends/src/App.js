import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoute'
import Data from './components/Data'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login"> <button>Login Here</button></Link>
          <br></br>
          <Link to="/"> <button>Home</button></Link>
          
        </nav>
        <Switch>
        <Route exact path="/protected" ><PrivateRoute component={Data}/></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
