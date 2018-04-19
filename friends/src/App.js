import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Add_todo } from './ActionCall';

class App extends Component {
  constructor() {
    super();
    this.state = {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='Form'>
          <input
          type='text'
          placeholder='name'
          className='Form__input'>
          </input>
          <input
          type='text'
          placeholder='age'
          className='Form__input'>
          </input>
          <input
          type='text'
          placeholder='email'
          className='Form__input'>
          </input>
          <button
          className='Form__input-button'>
           Add New Friend </button>
        </div>
        <div className='List'>
          <h1>Friends</h1>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (props) => {
  return {
      friends: props
  };
};

export default connect(mapStateToProps, { Add_todo })(App);

