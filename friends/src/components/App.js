import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';
import { getFriends } from '../actions';
import styled from 'styled-components';

class App extends Component {
  componentDidMount(){
    console.log("CDM", this)
    this.props.getFriends();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <div>
        {(this.props.state.friendsReducer.isFetched) ? (this.props.state.friendsReducer.friends.map(friend => {
          return (
            <div>
              {friend.name}
            </div>
          )
        })) : null}
      </div>
      <footer>  status: {this.props.state.friendsReducer.status}</footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = {
  getFriends
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
