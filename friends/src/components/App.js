import React, { Component } from 'react';
import { connect } from 'react-redux';

// import logo from './logo.svg';
//import './App.css';
import Friends from './Friends';

class App extends Component {
 
  render() {
    return (
      <div>
          <Friends />     
      </div>
    );
  }
}

export default App;
