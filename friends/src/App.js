import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingFriends } from './actions'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchingFriends();
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

export default App;
