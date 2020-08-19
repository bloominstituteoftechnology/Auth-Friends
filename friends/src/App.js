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
        <PrivateRoute exact path='/addfriend' component={NewFriendForm}/>
        <PrivateRoute exact path='/friends' component={FriendsSheet}/>
        <Route component={Login}/>
      </Switch> 
    </div>
  );
}

export default App;
