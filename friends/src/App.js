import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login';
import Friends from '../components/Friends';

function App() {
  return (
    <Router>
		<Route exact path="/" component={Login} />
		<Route path="/friends" component={Friends} />
    </Router>
  );
}

export default App;
