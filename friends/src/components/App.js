import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Redux
import { connect } from 'react-redux';
//  Redux--Actions
import { getFriends } from '../actions';
// Components
import Friends from './Friends';
import CreateFriendForm from './CreateFriendForm';
import UpdateFriendForm from './UpdateFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <h5>Who needs 'em anyways?</h5>
        <Friends />
        <CreateFriendForm />
        {/* <UpdateFriendForm /> */}
      </div>
    );
  }
}

export default connect(null, { getFriends })(App);
