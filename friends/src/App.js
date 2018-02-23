import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions/actions.js';
import Friends from './components/FriendList.js';
import FriendForm from './components/FriendForm.js';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          {this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <h1>'Friends List'</h1>
          )}
        </header>
        <FriendForm />
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
