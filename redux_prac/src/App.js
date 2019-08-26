import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//import FriendsList from "./components/FriendsList"
import {connect} from "react-redux"
import {fetchFriends} from "./store/actions/index"

class App extends Component {

  render() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <FriendsForm />
      <FriendsList /> */}
    </div>
  )};
}

const mapStateToProps = state => ({
  friends: state.friends
})

export default connect(mapStateToProps, {fetchFriends})(App);
