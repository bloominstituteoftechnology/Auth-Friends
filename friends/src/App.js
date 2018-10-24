import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendslist';
import { fetchFriends } from './actions';
import { connect } from 'react-redux'
 
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchFriends();
    // call our action
  }

  render() {
    if (this.props.isfetching) {
      return (
        <h2>Please wait, fetching friends...</h2>
      );
    }
    return (
      <div className="App">
        <FriendsList friends = {this.props.friends} />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.combineReducers.isFetching 
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps,{ fetchFriends })(App);
