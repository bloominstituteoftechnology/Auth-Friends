import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
