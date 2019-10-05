import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import FriendList from './components/FriendList';
import PrivateRoute from './components/PrivateRoute';



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to="/protected">Friend List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <PrivateRoute path="/protected" component={FriendList}/>
          <Route path="/login" component={LoginPage}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
