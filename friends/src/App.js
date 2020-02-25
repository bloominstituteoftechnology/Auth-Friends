import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
