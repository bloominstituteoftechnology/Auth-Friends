import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  componentDidMount() {
    console.log("it mounted")
  }
  render() {
    return (
      <div className="App">
          Hello World
      </div>
    );
  }
}

export default App;
