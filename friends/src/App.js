import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
// import { connect } from "react-redux";
import { getFriends } from "./actions";

class App extends Component {
  // componentDidMount() {
  //   this.props.getFriends();
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OUR FRIENDS</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <FriendForm />
        {/* <Friends /> */}
      </div>
    );
  }
}

export default App;
