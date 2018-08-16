import React from 'react';
import { connect } from 'react-redux';

import { fetchFriends, addFriend } from '../actions';
import FriendsForm from '../components/FriendsForm';

class Friends extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const { friends, isFetching, addFriend, isAdding } = this.props;
    return (
      <div>
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          friends.map(friend => (
            <div
              style={{
                borderBottom: '1px solid #dbdbdb',
                marginBottom: '1rem',
              }}
            >
              <h3>
                {friend.name}, {friend.age}
              </h3>
              <a href={`mailto:${friend.email}`}>
                <small>{friend.email}</small>
              </a>
            </div>
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

function mapStateToProps({ friends, isFetching, isAdding }) {
  return {
    friends,
    isFetching,
    isAdding,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchFriends: () => dispatch(fetchFriends())
//   }
// }

export default connect(
  mapStateToProps,
  { fetchFriends, addFriend },
)(Friends);
