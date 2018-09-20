import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './store/actions';

import FriendContainer from './containers/FriendContainer';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <FriendContainer />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {

//   };
// };

export default connect(null, { fetchFriends })(App);
