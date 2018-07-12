import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '..//actions/';
import Friends from './Friends';

import logo from '../logo.png';
import '../App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.props.fetching ? (
          <p>Loading, please wait...</p>
        ) : (
          <Friends friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    fetched: state.friendsFetched,
    error: state.error
  }
}

export default connect(mapStatetoProps, {
  fetchData,
})(App);