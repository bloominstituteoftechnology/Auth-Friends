import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from "react-redux";
import { fetchingFriends } from "../actions";
import AddFriend from "./AddFriend.js";
import FriendList from "./FriendList.js";

class App extends Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <div className="App">
        <AddFriend />
        <FriendList {...this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state
  return friendsReducer
}

export default connect(mapStateToProps, { fetchingFriends })(App);
