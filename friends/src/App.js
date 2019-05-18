import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          My Friends 
          <button>
            <Link to='/login'>Login</Link>  
          </button>
        </header>
      </div>

      
      <Route path='/login' component={Login} />
      <PrivateRoute  exact path='/friends' component={Friends} />
    </>
  );
}

export default App;
