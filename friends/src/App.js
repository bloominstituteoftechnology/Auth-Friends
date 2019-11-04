import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
       <Link 
        to='/Login'
        className='link'
        >
          Login
        </Link>

        
      </nav>

      <Route 
        exact path='/login'
        component={Login}
      />
    </div>
  );
}

export default App;
