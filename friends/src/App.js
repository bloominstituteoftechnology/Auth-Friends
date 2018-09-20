import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchFriends} from './actions/index';
import { connect } from 'react-redux';
import FriendsList from './components/FriendsList';


class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
    
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src = {logo} className = "App-logo" alt="logo" />
        ) : (
          <FriendsList friends = {this.props.friends} />
        )}



      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetching: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, {
  fetchFriends
})(App);
