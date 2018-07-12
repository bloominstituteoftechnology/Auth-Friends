import React, { Component } from 'react';
import { connect } from 'react-redux'
import { dataFetch } from './actions/index'
import  Friends  from './components/Friends'
import  CreateFriendForm  from './components/CreateFriendForm'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.dataFetch();
  }
  render() {
    return (
      <div className="App">
        <Friends  />
        <CreateFriendForm />
      </div>
    );
  }
}


export default connect(null, { dataFetch })(App);
