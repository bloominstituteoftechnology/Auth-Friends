import React, { Component } from 'react';

import './App.css';
import FriendsList from './components/FriendsList';
import {fetchFriends} from './actions/actions';
import { connect } from "react-redux";

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendsList/>
        {
          // Create Add Friend Component
          // *Create Delete Component
          // *Create Update Friend Component
        }
      </div>
    );
  }
}

export default connect(()=>({}), {fetchFriends})(App);
