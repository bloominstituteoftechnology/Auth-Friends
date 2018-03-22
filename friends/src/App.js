import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { oneAct } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.oneAct();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <p>You are fetching...</p>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    oneAct: state.oneAct,
    error: state.error
  };
};

export default connect(mapStateToProps, { oneAct })(App);

// oneAct is my action incoming from actionCreator
