import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './components/Friends';
import './App.css';

class App extends Component {
  render() {
    return <Friends friends={this.props.friends} />;
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(mapStateToProps)(App);
