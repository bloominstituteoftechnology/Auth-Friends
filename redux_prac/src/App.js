import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import FriendsList from "./components/FriendsList"
import FriendsForm from "./components/FriendsForm"
import {connect} from "react-redux"
import {fetchFriends} from "./store/actions/index"

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }





  render() {
    console.log(this.props)
  return (
    <div className="App">
      <h1>Hello World</h1>
       <FriendsForm /> 
  {this.props.friends.map(item => (
    <FriendsList friend={item} key={item.id} />
  ))  }
    </div>
  )};
}

const mapStateToProps = state => ({
  friends: state.friends
})

export default connect(mapStateToProps, {fetchFriends})(App);
// This connects fetchFriends with our state so now we access it using this.props.fetchFriends