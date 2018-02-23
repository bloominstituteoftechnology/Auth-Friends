import React, { Component } from "react";
import { connect } from "react-redux";
import Friends from "./components/Friends";
import { getFriends } from "./actions";
import "./App.css";
import CreateFriendForm from "./components/CreateFriendForm";

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">More Friends</h1>
        <CreateFriendForm/>
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
