import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteFriend } from '../actions';

const RenderFriend = ({ friend, deleteFriend }) => {
  return (
    <div>
      <div>{friend.name}</div>
      <div>{friend.age}</div>
      <div>{friend.email}</div>
      <button
        onClick={() => {
          deleteFriend(friend.id);
        }}
      >
        Remove {friend.name}
      </button>
      <Link to={`/friends/${friend.id}`}>
        <button>Edit {friend.name}</button>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { deleteFriend }
)(RenderFriend);
