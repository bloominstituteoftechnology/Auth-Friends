import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Styling
import './App.css';

// Components
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <ul>
            <li>
              <Link to="/login" >Login</Link>
            </li>

            <li>
              <Link to="/login" >Logout</Link>
            </li>

            <li>
              <Link to="friends" >Friends</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
