import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {Cards, AddNew} from './components';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends App : React-Redux-Thunk</h1>
        </header>
        <div>
          {/* {this.props} */}
        </div>
        <Cards />
        <AddNew />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}
export default connect(mapStateToProps, {})(App);
 