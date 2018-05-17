import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import Friends from './Friends';

class App extends Component {
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

  }
}

export default connect(mapStateToProps, {  } )(App);
