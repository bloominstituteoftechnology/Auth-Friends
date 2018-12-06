import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

import FriendsList from './components/FriendsList';
import FriendsForm from './components/FriendsForm';

import './App.css';



class App extends Component {
  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.props.friends}/>
        <FriendsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      friends: state.friends,
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
