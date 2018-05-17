import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';
import {fetchFriends, createFriend} from './actions'

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
          {/* <CreateFriendForm />
          <UpdateFriendForm /> */}
        </header>
        <CreateFriendForm createFriend={this.props.createFriend} />
        <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends,
    pending: state.pending,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchFriends, createFriend })(App);
