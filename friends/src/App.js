import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogInForm from './Components/LogInForm';
import HomePage from './Components/HomePage';
import Navigation from './Components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import Friend from './Components/Friend';
import { ProtectedRoute } from './ProtectedRoute';
import FriendForm from "./Components/FriendForm";

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const isLoggedIn = useSelector(state => state.root.isLoggedIn);
  console.log('OURSTATE', state);
  console.log(isLoggedIn);
  return (
    <div>
      <Router>
        <Navigation />
        <div className='App'>
          {/* Don't put HTML inside of the 'Switch' */}
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LogInForm} />
            {/* history/location/match comes from Route as props */}
            <ProtectedRoute exact path='/friends' component={Friend} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
