import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchFriends from '../actions';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log('friends props in app render', this.props.friends);
    return (
      <div className="App">
        {this.props.friends.friends.map(friend =>
          <div key={friend.id}>
          <h4>Name: {friend.name}</h4>
           <h5>Age: {friend.age}</h5>
           <h5>Email: {friend.email}</h5>
           </div>
           )} 
        <p className="App-intro">
         {this.props.fetching ? (
           <img src={logo} className = "App-logo" alt = "logo" />
         ) : null}
         {this.props.error !== null ? <div>{this.props.error}</div> : null}

        </p>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log('logging state in mapStateToProps', state.friends)
  return {
    friends: state.friends, //comes from state defined in friendsReducer
    fetchingFriends: state.fetchingFriends,
    error: state.error
  }
}


export default connect(mapStateToProps, {fetchFriends}) (App);
