import React, { Component } from 'react';
import Friends from './components/friends';
import { connect } from 'react-redux';
import { getFriends } from './actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div>
        <Friends friends={this.props.friends}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { getFriends })(App);
