import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchFriends } from './friendAction';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
         {this.props.friends.map(friends => {
           return <div key={friends.name}>{friends.name}</div>
         })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetchingFriends: state.friendsReducer.fetchingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);
