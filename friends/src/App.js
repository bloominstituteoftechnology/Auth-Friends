import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PrivateRout from './components/Privateroute';
import Login from './components/Login';
import FriendsList from './components/friendlist';



function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Link to='/'>Login</Link>
        </div>     
        <div>
          <Route exact path='/' component={Login} />
        </div>
    </div>
    </Router>
  );
}

export default App;