import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriends } from './actions';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchingFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">I Get by With a Little Help From My Friends</h1>
        </header>
        <p className="App-intro">
          woot woot
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchingFriends }) (App);
