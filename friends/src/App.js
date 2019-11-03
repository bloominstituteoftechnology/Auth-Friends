import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/nav'
import SignIn from './components/siginIn'; 
import SignUp from './components/signUp'; 
import FriendsList from './components/friendsList';
import ProtectedRoute from "./components/protectedRoute";

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <ProtectedRoute exact path='/friends' component={FriendsList} />
      

    </div>
  );
}

export default App;
