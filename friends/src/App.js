import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Friends from './Friends';
import CreateFriendsForm from './CreateFriendsForm';
import { getFriends } from './Actions'

class App extends Component {

  componentDidMount(){
    this.props.getFriends()
  }

  render() {
    return (
      <div className="App">
        <h1>My Friends List</h1>
        <CreateFriendsForm />
        <div className="cardContainer">
          {this.props.friends.map(friend => {
            return <Friends key={friend.id} myFriend={friend} />
          })}
        </div>
      </div>
    );
  }
}

const mapPropsToState = state => {
  return{
    friends: state.friends
  }
}

export default connect(mapPropsToState, { getFriends: getFriends })(App);
