import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/index';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <FriendsList />
        <AddFriendForm />
      </div>
    );
  }
}

export default connect(null, { fetchFriends })(App);
