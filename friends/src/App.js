import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import logo from './logo.svg';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    console.log('app props',this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Friends friends={this.props.friends} />
        <CreateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getFriends })(App)
