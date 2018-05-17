import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import Friends from './components/Friends';
// import CreateFriendForm from './CreateFriendForm';
// import UpdateFriendForm from './UpdateFriendForm';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Friends />

        </div>
      </div>
    );
  }
}

export default App;
