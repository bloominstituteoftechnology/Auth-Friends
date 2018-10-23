import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../actions';
import Friends from './Friends';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.props.friends} deleteHandler={this.props.deleteFriend}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    got: state.got
  }
}

export default connect(mapStateToProps, {getFriends, deleteFriend})(App);