import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function App() {
  return (

<Router>
<div className="App">
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected Page</Link>
    </nav>
    <Switch>
      <Route exact path="/protected" />
      <Route path="/login" />
      <Route />
    </Switch>
    </div>
     </Router>
  );
}

export default App;
