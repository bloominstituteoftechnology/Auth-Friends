import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/actions';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
    console.log(this.props.friends)
  }
  render() {
    return (
      <div className="App">
     
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return {
    friends: state.friends
  }
} 

export default connect(mapStateToProps, {fetchFriends})(App);
