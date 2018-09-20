import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';
import FriendList from './components/FriendList';

class App extends Component {

  state = {
    name: '',
    age: '',
    email: ''
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
