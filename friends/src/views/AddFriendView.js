import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

import {FriendForm} from '../components';

function AddFriendView(props) {
  return <FriendForm {...props} />;
}

export default connect(
  null,
  { addFriend }
)(AddFriendView);
