import React from 'react';
import { connect } from 'react-redux';

import {
  fetchFriends,
  addFriend,
  updateFriend,
  deleteFriend,
} from '../actions';
import FriendsForm from '../components/FriendsForm';
import Friend from '../components/Friend';

class Friends extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const {
      friends,
      isFetching,
      addFriend,
      isAdding,
      isUpdating,
      updateFriend,
      isDeleting,
      deleteFriend,
    } = this.props;
    return (
      <div>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          friends.map(friend => (
            <Friend
              key={friend.id}
              friend={friend}
              onFormSubmit={updateFriend}
              isUpdating={isUpdating}
              isDeleting={isDeleting}
              onDelete={deleteFriend}
            />
          ))
        )}
        {isAdding ? (
          <p>Adding Friend...</p>
        ) : (
          <FriendsForm onFormSubmit={addFriend} />
        )}
      </div>
    );
  }
}

function mapStateToProps({
  friends,
  isFetching,
  isAdding,
  isUpdating,
  isDeleting,
}) {
  return {
    friends,
    isFetching,
    isAdding,
    isUpdating,
    isDeleting,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchFriends: () => dispatch(fetchFriends())
//   }
// }

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend, updateFriend, deleteFriend },
)(Friends);
