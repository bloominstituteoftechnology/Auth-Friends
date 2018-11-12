import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './components/Friends';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <Form />
      </div>
    );
  }
}

export default App;
