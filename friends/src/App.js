import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }
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

export default connect(mapStateToProps,{ getFriends })(App);
