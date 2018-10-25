import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import Friends from './components/Friends';
import {connect}  from 'react-redux';
import {friendsReducer} from './reducer/index';

class App extends Component {
  state = {
    friends: this.props.friends
  }

  componentDidMount(){
    this.props.fetchFriends()
  }
  render() {
    return (
      <div className="App">
      <Friends friends={this.props.friends}/>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingFriends: state.fetchingFriends,
    friends: state.friends
  }
}

export default connect(mapStateToProps, actions)(App);
