import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddFriendForm from './components/AddFriendForm';
import { getFriends, deleteFriend } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }
  render() {
    const { isFetching, friends, deteleFriend } = this.props
    return (
      <div>
        <AddFriendForm />
        { !isFetching && friends.map(friend => 
        <div key={friend.id}>
          <div>{friend.name}</div>
          <div>{friend.age}</div>
          <div>{friend.email}</div>
          <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { friendsReducer } = state
  return friendsReducer
}

export default connect(mapStateToProps,{ getFriends, deleteFriend })(App);
