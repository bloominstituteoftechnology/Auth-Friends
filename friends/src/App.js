import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/actions';
import {connect} from 'react-redux';
import FriendsList from './components/friendsList';
import FriendProfile from './components/friendProfile';

import { Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
    console.log(this.props.friends)
  }
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={FriendsList} />
      <Route path='/:id' render={props=> <FriendProfile {...props}/>} />
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    friends: state.friends
  }
} 

export default connect(mapStateToProps, {fetchFriends})(App);
