import React, { Component } from 'react';
import './App.css';
import { fetchStuff } from './store/actions';
import { connect } from 'react-redux';
import FriendList from './components/friendsList';

class App extends Component {

  componentDidMount() {
    this.props.fetchStuff();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (<span>Loading...</span>) : (
        <FriendList fetching={this.props.fetching} friends={this.props.friends} />)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error,
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
  };
};

export default connect(mapStateToProps, { fetchStuff })(App);
