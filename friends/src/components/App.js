import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.isFetching ? (
          <h1>Loading Friends...</h1>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.id}>{friend.name}</li>
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
    isFetching: state.friendsReducer.isFetchingFriends
  }
}

export default connect(mapStateToProps, { fetchFriends })(App);
