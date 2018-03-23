import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendForm from './FriendForm';
import { getFriends } from '../actions';
import FriendList from './FriendList';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendList />
        <FriendForm />
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
