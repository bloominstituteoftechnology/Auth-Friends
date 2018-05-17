import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';
import {fetchFriends} from './actions'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Amazing Friends</h1>
          {/* <Friends friends={this.props.friends}/>
          <CreateFriendForm />
          <UpdateFriendForm /> */}
          {this.props.friends.map(friend => <div>{friend.name}</div>)}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
