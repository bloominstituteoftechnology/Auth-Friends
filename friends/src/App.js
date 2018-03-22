import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from './friends/Friends';
import getFriends from './friends/friendsActions';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <Friends friends={this.props.friends}/>;
  }
  
  componentDidMount() {
    this.props.getFriends();
  }
}


// const mapStateToProps = (state) => {
//   return {
//     friends: state.friends,
//   }
// }

const mapStateToProps = ({ friends }) => {
  return {
    friends
  }
}

const actions = {
  getFriends,
};

export default connect(mapStateToProps, actions)(App);
