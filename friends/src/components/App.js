import React, { Component } from 'react';
import {connect} from 'react-redux'

import '../App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    testState: "yay"
  }
}
export default connect(mapStateToProps)(App);
