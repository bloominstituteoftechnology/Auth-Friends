import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Homescreen from './components/Homescreen';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Friend from './components/Friend';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const isLoggedIn = useSelector(state => state.root.isLoggedin);
  console.log('state', state);
  console.log(isLoggedIn);
  return (
    <div>
      <Router>
        <Nav />
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Homescreen}/>
            <Route path='/login' component={Login} />
            <ProtectedRoute exact path='/friends' component={Friend} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
