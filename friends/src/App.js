import React, { Component } from 'react';
import './App.css';
import{ friendsActions } from '/actions/friendsActions.js';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        Time to build  friends app
      </div>
    );
  }
}

export default connect(mapStateToProps, {friendsActions})(App);
