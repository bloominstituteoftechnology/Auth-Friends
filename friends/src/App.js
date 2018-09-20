import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './store/actions';

import FriendContainer from './containers/FriendContainer';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <FriendContainer />
      </div>
    );
  }
}


export default connect(null, { fetchFriends })(App);
