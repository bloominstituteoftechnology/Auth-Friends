import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';

class App extends Component {


  render() {
    return (
      <Friends />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  }
};

export default connect(mapStateToProps, { addFriend })(App);
