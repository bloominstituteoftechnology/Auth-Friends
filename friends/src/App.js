import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { setInitialStateReducer } from "./reducers/setInitialStateReducer";
import { connect } from "react-redux";

class App extends Component {
  // componentDidMount() {
  //   this.props.setInitialStateReducer();
  // }
  render() {
    return (
      <div className="App">
        {/* {this.props.isFetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul style={{ listStyle: "none" }}>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )} */}
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
    setInitialStateReducer
  }
)(App);
