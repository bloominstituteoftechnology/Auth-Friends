import React, { Component } from "react";
import Friends from './components/Friends';
import { connect } from 'react-redux';
import { fetchFriends } from "../src/actions";

class App extends Component {
  state= {
    name: '',
    age: '',
    email: ''
  }
 
  render() {
    return (
      <Friends />
    );
  }
}


const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends,
    error: state.errorMessage
  };
};

export default connect(
mapStateToProps,
{fetchFriends}
)(App);

// export default App;