import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { friendsReducer } = state
  return friendsReducer
}

export default connect(mapStateToProps,{})(App);
