import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "../styles/App.css";
// pull in actions from action/index
import { fetchPeeps } from "./../actions/index";

class App extends Component {
  componentDidMount() {
    this.props.fetchPeeps();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.peeps.map(peep => {
              return <li key={peep.name}>{peep.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = state => ({
  peeps: state.charsReducer.peeps,
  fetchingPeeps: state.charsReducer.fetchingPeeps
});

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(
  mapDispatchToProps,
  { fetchPeeps }
  /* actions go here */
)(App);
