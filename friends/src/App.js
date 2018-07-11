import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">

        {
          this.props.fetching ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) :
            <div>
              test
            </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: true
  }
}

export default connect(mapStateToProps, {})(App);
