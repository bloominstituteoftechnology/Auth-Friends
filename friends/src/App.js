import React from 'react';
import { Route } from "react-router-dom"; 
import './App.css';

import LoginForm from './components/LoginForm.js'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
    </div>
  );
}

export default App;
