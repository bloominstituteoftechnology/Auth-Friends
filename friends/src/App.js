import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import PrivateRoute from './Utils/PrivateRoute'
import {Header, Login, FriendsSheet, NewFriendForm} from './Components'



function App() {

  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exactPath='/friends' component={FriendsSheet}/>
        <PrivateRoute exactPath='/addfriend' component={NewFriendForm}/>
        {/* <Route component={Login}/> */}
      </Switch> 
    </div>
  );
}

export default App;
