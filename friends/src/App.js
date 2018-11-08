import React, { Component } from 'react';
import {fetchFriends} from './actions/actions';
import { connect } from "react-redux";

import './App.css';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <AddFriend/>
        <FriendsList/>
        {
          // *Create Delete Component
          // *Create Update Friend Component
        }
      </div>
    );
  }
}

export default connect(()=>({}), {fetchFriends})(App);
