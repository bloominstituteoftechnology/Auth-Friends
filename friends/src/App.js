import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddFriendForm from './components/AddFriendForm';
import { getFriends, deleteFriend, editFriend } from './actions';
import EditFriendForm from './components/EditFriendForm';

class App extends Component {
  componentDidMount = () => {
    this.props.getFriends()
  }
  render() {
    const { isFetching, isEditing, friends, deteleFriend } = this.props
    return (
      <div>
        <AddFriendForm />
        { !isFetching && friends.map(friend => 

        { return friend.isEditing? 
          (<EditFriendForm key={friend.id}/>) 
          : 
          (
            <div key={friend.id}>
              <div>{friend.name}</div>
              <div>{friend.age}</div>
              <div>{friend.email}</div>
              <button onClick={() => this.props.deleteFriend(friend.id)}>Delete</button>
              <button onClick={() => this.props.editFriend(friend.id, friends)}>Edit</button>
            </div>
          )}        
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { friendsReducer } = state
  return friendsReducer
}

export default connect(mapStateToProps,{ getFriends, deleteFriend, editFriend })(App);
