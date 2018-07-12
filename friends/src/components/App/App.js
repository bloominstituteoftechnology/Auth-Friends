import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../../styles/logo.svg";
import "../../styles/App.css";
import { fetch } from "../../actions/index";

class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: [], //state.friendReducer.friends,
    fetchingFriends: state.fetchingFriends
  };
};
export default connect(
  mapStateToProps,
  {
    fetch
  }
)(App);
