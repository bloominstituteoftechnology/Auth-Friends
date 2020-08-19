import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import {Header, Login, FriendSheet} from './Components'



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route exactPath='/friends' component={FriendSheet}/>
        <Route component={Login}/>
      </Switch>
     
    </div>
  );
}

export default App;
