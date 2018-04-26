import React, { Component } from 'react';
import './App.css';
import { getFriends, getFriend, addFriend, updateFriend, deleteFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        { this.props.friendsFetched
          ? this.props.friends.map((friend, index) => {
            return (
                <div key={index}>
                  { friend.name }
                </div>
              )
          })
          : <h3>FETCHING FRIENDS</h3>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(`state`, state)
  return {
    friends: state.friends,
    friendsFetched: state.friendsFetched
  }
}

export default connect(mapStateToProps,
            { getFriends, getFriend, addFriend, updateFriend, deleteFriend })(App);
