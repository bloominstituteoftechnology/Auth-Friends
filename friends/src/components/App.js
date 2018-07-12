import React, { Component } from 'react';
import './styles/App.css';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import logo from '../logo.svg';

class App extends Component {

componentDidMount() {
  this.props.fetchFriends('http://localhost:5000/api/friends');
}

render() {
  return (
    <div className="App">
      {this.props.fetching ? (
        <img src={logo} className="App-logo" alt="logo" />
      ) : (
        <ul>
          {this.props.friends.map(friend => {
            return <li key={friend.id}>{friend.name}{friend.age}{friend.email}</li>;
          })}
        </ul>
      )}
      {this.props.error !== null ? <div>{this.props.error} </div> : null}
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    fetching: state.friends.fetching,
    fetched: state.friends.fetched,
    error: state.friends.error,
    friends: state.friends.friends
  }
};

export default connect( mapStateToProps, {fetchFriends}) (App);
