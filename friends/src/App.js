import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loadFriends } from './actions';
// import axios from 'axios';
// import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';

class App extends Component {
  componentDidMount() {
    this.props.loadFriends();
  }
  render() {
    console.log('App props: ', this.props);
    return (
      <div className="App">
        <div className="Header">
          <h1>Friends List</h1>
          {this.props.fetchingFriends ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : null}
        </div>
        <Friends friends={this.props.friends} className="friends"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Mapping this state: ", state);
  return {
    friends: state.friends, 
    fetchingFriends: state.fetchingFriends,
    error: state.error
  }
}

export default connect(mapStateToProps, { loadFriends })(App);
