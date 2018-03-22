import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getFriends } from './actions'
import Friends from './components/friends';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
}

  render() {
    return (
      <div className="App">
          <Friends />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getFriends })(App)

