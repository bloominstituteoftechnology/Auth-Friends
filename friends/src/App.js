import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Friends from './components/Friends';
import './App.css';

class App extends Component {
  componentDidMount() {
    const URL = 'http://localhost:5000/api/friends';
    this.props.fetchData(URL);
  }
  render() {
    return <Friends friends={this.props.friends} />;
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
  };
};

export default connect(
  mapStateToProps,
  { fetchData },
)(App);
