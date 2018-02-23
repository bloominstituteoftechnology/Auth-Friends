import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions/actions.js';
import Friends from './components/FriendList.js';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    console.log("this is props", this.props.friends)
    const { friends } = this.props;
    console.log("In App, friends is: ", friends);
    return (
      <div className="App">
        <header className="App-header">
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <h1>'Friends List'</h1>
          )}
        </header>
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("This is the state in mapStateToProps: ", state.friends);
  return {
    friends: state.friends,
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
