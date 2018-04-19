import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import{getFriends} from './actions';

class App extends Component {

  componentDidMount(){
    this.props.getFriends();
  }

  render() {
    return(
      <div className="App">
      <ul className="App-header">
        {this.props.friends.map(friend => <li>{friend.name}</li>)}
      </ul>
      </div>
    );
  }
}

const mapDispatchtoProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching
  };
};
export default connect (mapDispatchtoProps,{getFriends})(App);