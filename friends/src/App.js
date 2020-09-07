import React from 'react';
import Friends from './components/Friends';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import friendCard from './components/friendCard';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to ="/frinds">Friends</Link>
          </li>
        </ul>
        <Switch>
          <Friends exact path='/friends' component={friendCard} />
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>
        <Friends/>
      </div>
    </Router>
  );
}

export default App;
