import React from 'react';
import { Link, Route } from 'react-router-dom';
import Signin from './components/Signin';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form"></div>
        <div className="header"></div>
      <div>Lambda<span>Login Site</span></div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Sign In</Link>
      </nav>

      <Route exact path='/signin' component={Signin} />

    </div>
  );
}

export default App;
