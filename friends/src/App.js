import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import { connect } from "react-redux";
import { getFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
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

        <div className="Flex-Container">
          {this.props.gettingFriends ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <Friends friends={this.props.friends} />
          )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};
export default connect(mapStateToProps, { getFriends })(App);

// export default App;
