import React, { Component } from 'react';
import FriendList from './components/FriendList'
import './App.css';
import Loginpage from './components/loginpage'
import {Route, } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  render() {
    return (
      <div>
        <div>
      <Route path = "/login" component = {Loginpage} />

        </div>
      <div>
        <PrivateRoute path = "/friendlist" component = {FriendList} />

      </div>
      </div>
    );
  }
}

export default App;
