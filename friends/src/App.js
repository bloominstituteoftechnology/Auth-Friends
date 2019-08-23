import React from 'react';
import { Route, Link } from "react-router-dom"; 
import './App.css';

//componenets
import LoginForm from './components/LoginForm.js'
// import PrivateRoute from './components/PrivateRoute.js'
import Friends from './components/Friends.js'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Login!</Link>
        </li>
        <li>
          <Link to="/protected">Users Only</Link>
        </li>
      </ul>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/protected" component={Friends} />
    </div>
  );
}

export default App;
