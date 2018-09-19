import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    name: '',
    age: '',
    email: ''
  }

  render() {
    return (
      <div className="App">
        rendering app component
      </div>
    );
  }
}

export default App;
