import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from "../../actions/index.js"

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
          Hello World
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendReducer.friends.data

  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getFriends })(App);
