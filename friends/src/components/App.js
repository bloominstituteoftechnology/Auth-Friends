import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, saveFriend, updateFriend, deleteFriend } from '../actions';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
    this.props.saveFriend({name: 'TestFriend', age: 5000, email: 'thisismytestfriend' });
    this.props.updateFriend(1, {name: 'ChangedBen', age: 3230, email: 'testingupdatingfriend' });
    this.props.deleteFriend(3);
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

export default connect(mapStateToProps, { fetchFriends, saveFriend, updateFriend, deleteFriend })(App);
