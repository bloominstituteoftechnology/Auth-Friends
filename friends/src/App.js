import React, { Component } from 'react';
import { creatStore, applyMiddleWare } from 'redux';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import logo from './logo.svg';
import './App.css';

// SWAPI -- https://github.com/LambdaSchool/Redux-Swapi/pull/173
// FRIENDS -- https://github.com/LambdaSchool/Redux-Friends/pull/198

const store = createStore()

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
