import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import { setInitialStateReducer } from "./reducers/setInitialStateReducer";
import { fetchFriendData } from "./actions/fetchApiAction";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriendData();
  }
  render() {
    return (
      <div className="App">
        {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul style={{ listStyle: "none" }}>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
        <p>Hey</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.setInitialStateReducer.friends,
    isFetching: state.setInitialStateReducer.isFetching
  };
};

export default connect(
  mapStateToProps,
  {
    fetchFriendData
  }
)(App);
