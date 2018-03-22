import React, { Component } from 'react';
import { connect } from 'react-redux';

// pull in actions from action/index
import { get_friends } from './actions';

import AddFriend from './components/AddFriend';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.get_friends();
  }

  render() {
    return (
      <React.Fragment>
        {/* FriendsList */}
        {this.props.fetchFriends ? (
          <p>Fetching...</p>
        ) : (
          <React.Fragment>
            {this.props.friends.map(friend => {
              return <ul key={`${friend.name} ${friend.id}`}>
                <li>{friend.name}</li>
                <li>{friend.age}</li>
                <li>{friend.email}</li>
              </ul>;
            })}
          </React.Fragment>
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

export default connect(mapStateToProps, { get_friends })(App);
