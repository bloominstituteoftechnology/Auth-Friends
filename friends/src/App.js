import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './Components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Login</Link>
          </li>
        </ul>
          <Switch>
            <Route path='/login' component={Login}></Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
