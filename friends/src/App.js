import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from './components/Friends';
import './App.css';

import { getData } from './actions';

class App extends Component {

  componentDidMount() {
    //get data from api
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <h1>Here are your Friends</h1>
        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    friends: state.friendsReducer.friends
  }
}

export default connect(mapStateToProps, { getData })(App);
