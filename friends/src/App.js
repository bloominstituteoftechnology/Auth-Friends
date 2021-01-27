import './App.css';
import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
        <Link to="/Login">Login</Link>
    
        <Switch>         
          <Route path="/Login" component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
