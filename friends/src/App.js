import React, { Component } from 'react';
import { connect } from 'react-redux';

import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';
import './App.css';

import { getData } from './actions';

class App extends Component {

  changeHandler = event => {

  }

  componentDidMount() {
    //get data from api
    this.props.getData()
  }

  render() {
    if (this.props.fetchingFriends) {
      return (
        <h2>...loading</h2>
      )
    } else {
      return (
        <div className="App">
          <h1>Here are your Friends</h1>
          <Friends friends={this.props.friends} />
          <CreateFriendForm />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    friends: state.friendsReducer.friends,
    fetchingFriends: state.friendsReducer.fetchingFriends
  }
}

export default connect(mapStateToProps, { getData })(App);
