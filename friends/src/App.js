import React, { Component } from 'react';
import { connect } from 'react-redux';

import  Friends  from '../components/Friends';

import { getFriends } from '../actions';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    if (this.props.fetching) {
      return <h1>Getting Friends, Please wait</h1>
     }
     return (
       <div >
         <Friends friends={this.props.friends} />
       </div>
     );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
