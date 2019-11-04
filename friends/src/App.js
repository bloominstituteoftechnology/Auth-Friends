import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <nav className="nav-header">
       <Link 
        to='/Login'
        className='link'
        >
          Login
        </Link>

        <Link 
          to='/'
          className='link'
        >Link
        </Link>
      </nav>

      <Route 
        path='/'
        component={Login}
      />
    </div>
  );
}

export default App;
