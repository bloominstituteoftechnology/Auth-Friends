import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/actions';
import {connect} from 'react-redux';
import FriendsList from './components/friendsList';
import FriendProfile from './components/friendProfile';

import { Route } from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path='/' component={FriendsList} />
        <Route path='/:id' render={props => <FriendProfile {...props}/>} />
      </div>
    );
  }
}



export default App;
