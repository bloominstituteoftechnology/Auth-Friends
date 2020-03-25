import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Friends</h1>
        <Link to='./login/'>Login</Link>
      </div>
    </Router>
  );
}

export default App;
