import React, { Component } from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from './actions';


// for testing in console
window.axios = axios;

class App extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  addFriendHandler = (event, friend) => {
    event.preventDefault();
    this.props.addFriend(friend);
  };

  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} addFriendHandler={this.addFriendHandler}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state in App.js', state.friends);
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    
  };
}

export default connect(
  
  mapStateToProps,
  { fetchFriends, addFriend} 
)(App);


