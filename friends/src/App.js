import React from 'react';
import Login from './components/login'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>

        <div>
          <Link to='/login'>Login</Link>
        </div>

        <div>
          <Link to='/protected'>Protected</Link>
        </div>


        <Login />
      </div>


    </Router>

  );
}

export default App;
