import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }
  render() {
    const {friends} = this.props
    return (
      <div>
        { friends.map(friend => 
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
