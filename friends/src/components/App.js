import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
import { getData } from '../actions';

class App extends Component {
  componentDidMount() {
    // this.props.getData();
  }
  render() {
    return (
      <div className="App">
        {/* {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )} */}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = (state) => {
  return {
    // chars: state.charsReducer.chars,
    // error: state.charsReducer.error,
    // fetching: state.charsReducer.fetching,
  };
};

export default connect(
  mapDispatchToProps,
  {
    // getData,
  }
)(App);