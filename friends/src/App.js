import React, { Component } from "react";
import { connect } from "react-redux";
import Friends from "./components/Friends";
import { getFriends } from "./actions";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">More Friends</h1>
        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getFriends })(App);
