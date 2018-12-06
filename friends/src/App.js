import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchFriends } from "./actions";
import Friends from "./components/Friends";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.isFetching) return <h2>Friends list is loading...</h2>;

    return (
      <div className="App">
        <h1>Friends List</h1>

        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.reducers.friends,
    isFetching: state.reducers.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
