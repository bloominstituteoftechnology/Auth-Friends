import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login'

import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
				<nav>
					<Link to="/login">Login</Link>
				</nav>
				<Switch>
					<Route component={Login}/>
				</Switch>
			</Router>
    </div>
  );
}

export default App;
