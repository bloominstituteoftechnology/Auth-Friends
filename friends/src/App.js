import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Friends from './components/Friends';
import { fetchFriends } from './actions'


class App extends Component {

  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props.friends)
    return (
      <div className="App">
       {/* <Friends friends={this.props.friends} /> */}
      </div>
    );
  }
}

function mapStateToProps({ friendsList }){
  return {
    friends: friendsList.friends,
    isFetching: friendsList.fetchingFriends
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);
