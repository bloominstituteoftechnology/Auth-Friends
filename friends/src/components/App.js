import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

export default connect(null, {
  fetchData
})(App);

