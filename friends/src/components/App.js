import React, { Component } from 'react';
import FriendsList from './FriendsList';
import {connect} from 'react-redux';
import {getFriends } from '../actions/index';


class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
      <h1>All My Friends</h1>
      {this.props.gettingFriends ? (<h4>Wait while we find some friends for you</h4>) :
      (<FriendsList friends={this.props.friends}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendReducer } = state;
  return {
    friends: friendReducer.friends,
    gettingFriends: friendReducer.gettingFriends
  }
}

export default connect(mapStateToProps, { getFriends })(App);
