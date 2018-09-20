import React, { Component } from 'react';
import {connect} from 'react-redux';
// import logo from '../logo.svg';
import '../styles/App.css';
// import './App.css';
import {fetchFriends} from '../actions';

export const img = null

class App extends Component {

  componentDidMount(){
    this.props.fetchFriends()
  }
  render() {
    return (
      <div className="App">
      {this.props.fetching ? (img): (
        
        <ul>
          {this.props.friends.map(friend =>{
            return <li key={friend.name}>{friend.name}</li>;
          })}
        </ul>
      )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    fetchingFriends: state.fetchingFriends
  };
};

export default connect(mapStateToProps,{fetchFriends}) (App);
