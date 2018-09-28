import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends, saveFriend } from './actions';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends friends={this.props.friends} />
        <FriendForm state={this.state} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    savingFriends: state.savingFriends,
    error: state.error
  };
}

export default connect(mapStateToProps, {fetchFriends, saveFriend})(App);
