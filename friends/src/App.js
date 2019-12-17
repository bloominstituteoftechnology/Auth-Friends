import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from './Components.js/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login />
      </header>
    </div>
  );
}

export default App;
