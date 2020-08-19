import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import './App.css';
import Login from './components/Login'; 
import Header from './components/Header'; 


function App() {
  return (
    <div className="App">
      <Header /> 
      <Login /> 
    </div>
  );
}

export default App;
