import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  }
}
export default connect(mapStateToProps, {})(App);
