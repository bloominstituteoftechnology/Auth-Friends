import React, { Component } from 'react';
import { connect } from "react-redux";
import FriendsList from './container/FriendsList';
import { getAction } from './actions';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      friends: []
    }
  }
  componentDidMount(){
    this.props.getAction();
  }
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state=> ({
    friends: state.getReducer.friends,
})

export default connect(
  mapStateToProps,
  { getAction } 
)(App);
