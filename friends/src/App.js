import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
class App extends Component {
  
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {

  };
};

export default connect(mapStateToProps, {})(App);
