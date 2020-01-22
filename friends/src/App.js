import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Friend from './components/Friend';
import { ProtectedRoute } from '../src/ProtectedRoute';
import Homescreen from './components/Homescreen';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    dispatch({ type: 'DELETE_LOGIN', payload: false })
  }

  return (
      <Router>
        <div className='App'>
          <ul>
            <li>
            <Link exact to='/'>Home</Link>
            </li>
            <li>
            <Link to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/friends'>Friends</Link>
            </li>
            <button onClick={handleLogout}>Logout</button>
            <Route exact path='/' component={Homescreen} />
            <Route path='/login' component={Login} />
            <ProtectedRoute exact path='/friends' component={Friend} />
          </ul>
        </div>
      </Router>
  )
}

export default App;
