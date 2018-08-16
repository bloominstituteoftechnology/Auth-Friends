import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions'

class App extends Component {
  constructor (props){
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    this.props.getFriends()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProsp = (state) => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
    error: state.error,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
  }
}

const actions = {
  getFriends
}

export default connect(mapStateToProsp, actions)(App);
