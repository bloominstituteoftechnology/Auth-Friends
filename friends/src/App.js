import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddFriendForm from './components/AddFriendForm';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }
  render() {
    const { isFetching, friends} = this.props
    return (
      <div>
        <AddFriendForm />
        { !isFetching && friends.map(friend => 
        <div key={friend.id}>
          <div>{friend.name}</div>
          <div>{friend.age}</div>
          <div>{friend.email}</div>
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

export default connect(mapStateToProps,{ getFriends })(App);
