import React, { Component } from 'react';
import './App.css';
import { fetchStuff } from './store/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchStuff();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (<span>Loading...</span>) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
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
