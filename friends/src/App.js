import React from 'react';
import {Link, Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Friends from './components/Friends';
import PrivateRoute from "./components/PrivateRoute"
function App() {
  return (
    <div className="App">
      
      <Link to= "/">Home </Link>
      <Link to= "/login">Login </Link>
      <Route exact path="/protected" component={Friends}/>
      
      <Route exact path="/login" component={Login}/>
    </div>
  );
}

export default App;
