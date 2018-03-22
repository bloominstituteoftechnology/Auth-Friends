import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateFriendForm from './CreateFriendForm';
import { getFriends } from '../actions';
import Friends from './Friends';

class App extends Component {
  componentDidMount(){

    this.props.getFriends();
    
  }

  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    friends: state.friends,
    error: state.errorMessage,
  }
}

export default connect(mapStateToProps, { getFriends })(App);