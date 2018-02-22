import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions/getFriends';
import FriendForm from './components/friendForm';
import createNewFriend from './actions/createNewFriend';
import Friends from './components/Friends';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    const { friends } = this.props;

    return (
      <div className="App">
        <FriendForm createNewFriend={this.props.createNewFriend} />
        <Friends friends={friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFriends })(App);
