import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { getFriends } from './actions';

import AddFriend from './components/AddFriend';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getFriends();
  }

  render() {
    return (
      <React.Fragment>
        {/* FriendsList */}
        {this.props.fetchFriends ? (
          <p>Fetching...</p>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={`${friend.name} ${friend.id}`}>{friend.name}</li>;
            })}
          </ul>
        )}
        <AddFriend />
      </React.Fragment>
    );
  }
}


// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean

const mapStateToProps = state => {
  return {
    fetchFriends: state.fetchFriends,
    friends: state.friends,
    error: state.errorMessage,
  };
};

export default connect(mapStateToProps, { getFriends })(App);