import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {fetchData} from '../actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }


  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Rest Assured...something is here</h1>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ):( <ul>{this.props.friends.map(friend => {
          return<li key={friend.id}>{friend.name}<br/>{friend.age}<br/>{friend.email}</li>
        })}</ul>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetchingFriends,
    test: state
  }
}

export default connect(mapStateToProps, {fetchData})(App);
