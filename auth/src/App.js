import React from 'react';
import Login from './components/login'
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <ul>
      <li>
        <Link to='login'>Login</Link>
      </li>
      <li>
        <Link to='protected'>protected Page</Link>
      </li>
    </ul>
      <Login/>
      <switch>
        <Route path='/login' component={Login} />
        <Route component={Login}/>
      </switch>
    </div>
  );
}

export default App;
