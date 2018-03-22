import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './components/friends';
import { getFriends } from './actions';


import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(App);

