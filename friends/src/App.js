import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchReq } from './actions';
import Friends from './components/Friends';
import SaveFriend from './components/SaveFriend';

class App extends Component {
  componentDidMount() {
    this.props.fetchReq();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <Friends />
        <SaveFriend />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    friends: state.friendsReducer.friends
  }
}

export default connect(mapStateToProps, { fetchReq })(App);
