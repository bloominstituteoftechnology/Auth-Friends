import React, { Component } from 'react';
import './App.css';
import { getFriends } from './actions/index';
import { connect } from 'react-redux';
import Friends from './components/Friends';
import FriendForm from './components/FriendForm';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    const { friends } = this.props;
    return (
      <div className="App">
          <h1 className="App-title">Add Me Friend!</h1>
        <FriendForm />
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
